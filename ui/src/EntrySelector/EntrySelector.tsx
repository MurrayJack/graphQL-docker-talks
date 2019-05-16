import React from "react";
import gql from "graphql-tag";
import useData from "../__Components/useData";

interface AllEntries {
    allEntries: [{
        Id: string;
        NameFirst: string;
        NameLast: string;
    }]
};

const ALL_ENTRIES = gql`
{
    allEntries {
        Id
        NameFirst
        NameLast
    }
}
`;

const EntrySelector = ({OnChange}) => {
    const { Data, Loading } = useData<AllEntries>(ALL_ENTRIES);

    if (Loading) return <div>Loading...</div>

    return (
        <select onChange={OnChange}>
            {Data.allEntries.map(e => <option value={e.Id} key={e.Id} >{`${e.NameFirst} ${e.NameLast}`}</option>)}
        </select>
    );
}

export default EntrySelector