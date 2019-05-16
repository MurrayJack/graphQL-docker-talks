import React from "react";
import gql from "graphql-tag";
import useData from "../__Components/useData";
import { PagedGrid } from "@starrez/starrygrid";

require("@starrez/starrygrid/lib/index.css");

interface Booking {
    entry: {
        Booking: [{
            Id: string;
            StartDate: string;
            EndDate: string;
            Location: string;
            Room: string;
        }]
    }
};

const ENTRY = gql`
    query Entry($id: ID) {
        entry(Id: $id) {
            Booking {
                Id
                StartDate
                EndDate
                Location
                Room
            }
        }
    }
`;

const Grid = ({ EntryId }) => {
    const { Data, Loading } = useData<Booking>(ENTRY, { id: EntryId }, EntryId);

    if (Loading) return <div>Loading</div>

    if (!Data.entry.Booking) return <div>No Bookings</div>

    return (
        <PagedGrid
            Data={Data.entry.Booking}
            Headers={[
                { headerName: "ID", field: "Id" },
                { headerName: "Start Date", field: "StartDate" },
                { headerName: "End Date", field: "EndDate" },
                { headerName: "Location", field: "Location" },
                { headerName: "Room", field: "Room" }
            ]}
            PaginationPageSize={40}
        />
    );
}

export default Grid