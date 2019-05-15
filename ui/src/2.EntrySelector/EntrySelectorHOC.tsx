import React from "react";
import gql from "graphql-tag";
import withData from "../__Components/withData";

const ALL_ENTRIES = gql`
{
  allEntries {
    Id
    NameFirst
    NameLast
  }
}
`;

const EntrySelectorHOC = ({ Data }) => {
    return (
        <select>
            {Data.allEntries.map(e => <option value={e.Id}>{`${e.NameFirst} ${e.NameLast}`}</option>)}
        </select>
    );
}

export default withData(EntrySelectorHOC, ALL_ENTRIES)