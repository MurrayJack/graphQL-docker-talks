module.exports = `
type Booking {
    Id: ID
    StartDate: String
    EndDate: String
    Location: String
    Room: String
}


type Query {
    allBookings: [Booking]!
}

`;
