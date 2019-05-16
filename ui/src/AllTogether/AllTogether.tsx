import React, { useState } from "react";
import Grid from "../Grid/Grid";
import EntrySelector from "../EntrySelector/EntrySelector";

require("./AllTogether.css")

const AllTogether = () => {
    const [entryID, setEntryID] = useState("1");

    const handleEntrySelectorOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setEntryID(value);
    }

    return (
        <div className="AllTogether">
            <header>
                <h1>Entry</h1>
                <label>
                    <div>Entry:</div>
                    <EntrySelector OnChange={handleEntrySelectorOnChange} />
                </label>
            </header>

            <article>
                <h1>Bookings</h1>
                <Grid EntryId={entryID} />
            </article>
        </div>

    );
}

export default AllTogether