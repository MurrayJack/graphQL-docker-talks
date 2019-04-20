const providers = require("../providers");
const _ = require("lodash");
const request = require('request');

module.exports = {
    Query: {
        allEntries: (global, args) => {
            return new Promise((resolve, reject) => {
                request(providers.entry, { json: true }, (err, res, body) => {
                    const entries = body.map(e => ({
                        Id: e.id,
                        NameFirst: e.nameFirst,
                        NameLast: e.nameLast,
                    }));
                    resolve(entries);
                });
            });
        },

        entry: (global, args) => {
            return new Promise((resolve, reject) => {

            });
        },

        entries: (global, args) => {
            return new Promise((resolve, reject) => {

            });
        },
    },

    Entry: {
        Booking: (global, args) => {
            return new Promise((resolve, reject) => {
                resolve([{
                    Id: "123"

                }])
            });
        },

    }


}