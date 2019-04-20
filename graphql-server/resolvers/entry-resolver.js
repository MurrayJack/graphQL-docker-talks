const providers = require("../providers");
const _ = require("lodash");
const request = require('request');

module.exports = {
    Query: {
        allEntries: () => {
            return new Promise((resolve) => {
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

        entry: (_, args) => {
            return new Promise((resolve) => {
                request(`${providers.entry}/${args.Id}`, { json: true }, (err, res, body) => {
                    const entries = {
                        Id: body.id,
                        NameFirst: body.nameFirst,
                        NameLast: body.nameLast,
                    };
                    resolve(entries);
                });
            });
        },

        entries: (_, args) => {
            return new Promise((resolve, reject) => {
                request(`${providers.entry}/${args.offSet}/${args.limit}`, { json: true }, (err, res, body) => {
                    const entries = body.map(e => ({
                        Id: e.id,
                        NameFirst: e.nameFirst,
                        NameLast: e.nameLast,
                    }));
                    resolve(entries);
                });
            });
        },
    },

    Entry: {
        Booking: (entry) => {
            return new Promise((resolve, reject) => {
                request(`${providers.booking}/${entry.Id}`, { json: true }, (err, res, body) => {
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