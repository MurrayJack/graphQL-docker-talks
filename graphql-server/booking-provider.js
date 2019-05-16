const {get} = require("./provider");

const bookingUri = 'http://localhost:5020/api/booking';

async function getAllBookingData() {
    const data = await get(bookingUri);
    return mapApiToGraphQL(data);
}

async function getEntryBookings(entryId) {
    const data = await get(`${bookingUri}/${entryId}`);
    return mapApiToGraphQL(data);
}

function mapApiToGraphQL(data) {
    return data.map(e => ({
        Id: e.id,
        StartDate: e.startDate,
        EndDate: e.endDate,
        Location: e.location,
        Room: e.room
    }));
}

module.exports = {
    getAllBookingData,
    getEntryBookings
}
