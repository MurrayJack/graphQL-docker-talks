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

const EntrySelectorHooks = () => {
    const { Data, Loading } = useData<AllEntries>(ALL_ENTRIES);

    if (Loading) return <div>Loading...</div>

    return (
        <select>
            {Data.allEntries.map(e => <option value={e.Id}>{`${e.NameFirst} ${e.NameLast}`}</option>)}
        </select>
    );
}

export default EntrySelectorHooks