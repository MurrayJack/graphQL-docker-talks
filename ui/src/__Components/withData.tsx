import React from "react";
import { Query } from "react-apollo";

const withData = (DataComponent, query) => () => {
    return (
        <Query query={query}>
            {({ loading, error, data }: any) => {
                if (error) return <div>{error.message}</div>
                                
                if (loading) return <div>Loading!!!</div>
                
               return <DataComponent Data={data} />
            }}
        </Query>
    );
}

export default withData