module.exports = `
type Entry {
    Id: ID
    NameFirst: String
    NameLast: String
    DOB: String

    Booking: [Booking]
}

type Query {
    allEntries: [Entry]!
    entries(offSet: Int!, limit: Int!): [Entry]!
    entry(Id: ID): Entry!
}
`;