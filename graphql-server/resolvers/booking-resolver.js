const providers = require("../providers");
const _ = require("lodash");
const request = require('request');

module.exports = {
    Query: {
        allBookings: () => {
            return new Promise((resolve, reject) => {
                request(providers.booking, { json: true }, (err, res, body) => {
                    const entries = body.map(e => ({
                        Id: e.id,
                        StartDate: e.startDate,
                        EndDate: e.endDate,
                        Location: e.location,
                        Room: e.room                        
                    }));
                    resolve(entries);
                });
            });
        },

    }
}