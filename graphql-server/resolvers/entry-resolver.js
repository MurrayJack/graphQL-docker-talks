const bookingProvider = require("../booking-provider");
const entryProvider = require("../entry-provider");

module.exports = {
    Query: {
        allEntries: async () => await entryProvider.getAllEntries(),

        entry: async (_, { Id }) => await entryProvider.getEntry(Id),

        entries: async (_, { offSet, limit }) => await entryProvider.getEntries(offSet, limit)
    },

    Mutation: {
        updateEntryName: async (_, { params }) => await entryProvider.updateEntryName(params)
    },

    Entry: {
        Booking: async ({ Id }) => await bookingProvider.getEntryBookings(Id)
    }
}