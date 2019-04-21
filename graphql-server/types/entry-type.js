module.exports = `
"Type definition for an entry"
type Entry {
    Id: ID
    NameFirst: String
    NameLast: String

    Booking: [Booking]
}

type Query {
    "Gets all the entries"
    allEntries: [Entry]!

    "Get a paged list of entries"
    entries(offSet: Int!, limit: Int!): [Entry]!

    "Get a specific Entry"
    entry(Id: ID): Entry!
}
`;