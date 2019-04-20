module.exports = `
type Feature {
    DoYouEven_Bookings: Boolean
    DoYouEven_Entries: Boolean
}

type Query {
    feature: Feature!
}
`;
