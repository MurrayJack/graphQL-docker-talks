const _ = require("lodash");

module.exports = {
    Query: {
        feature: (global, args) => {
            return new Promise((resolve, reject) => {
                resolve({
                    DoYouEven_Bookings: true, 
                    DoYouEven_Entries: true,
                })
            });
        },
    }
}