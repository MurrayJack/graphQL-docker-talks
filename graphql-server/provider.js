const request = require('request');

async function get(url) {
    return new Promise((resolve) => {
        request(url, { json: true }, (err, res, body) => {
            resolve(body)
        });
    });
}

async function post(url) {
    return new Promise((resolve) => {
        request.post(url, { json: true }, (err, res, body) => {
            resolve(body)
        });
    });
}

module.exports = { get, post };
