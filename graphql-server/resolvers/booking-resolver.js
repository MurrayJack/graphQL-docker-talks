const providers = require("../booking-provider");

module.exports = {
    Query: {
        allBookings: async () => {
            return await providers.getAllBookingData();
        },
    },
}