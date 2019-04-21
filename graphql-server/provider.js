const request = require('request');

async function get(url) {
    return new Promise((resolve) => {
        request(url, { json: true }, (err, res, body) => {
            resolve(body)
        });
    });
}

module.exports = get;