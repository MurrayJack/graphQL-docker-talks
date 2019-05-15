import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ALL_ENTRIES = gql`
{
  allEntries {
    Id
    NameFirst
    NameLast
  }
}
`;

const EntrySelectorRenderProps = () => {
    return (
        <Query query={ALL_ENTRIES}>
            {({ loading, error, data }: any) => {
                if (error) return <div>{error.message}</div>

                if (loading) return <div>Loading!!!</div>

                return (
                    <select>
                        {data.allEntries.map(e => <option value={e.Id}>{`${e.NameFirst} ${e.NameLast}`}</option>)}
                    </select>
                )
            }}
        </Query>

    );
}

export default EntrySelectorRenderProps