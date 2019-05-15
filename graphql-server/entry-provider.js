const { get, post } = require("./provider");

const entryUri = 'http://localhost:5010/api/entry';

async function getAllEntries() {
    const data = await get(entryUri);
    return data.map(e => mapApiToGraphQL(e));
}

async function getEntry(entryId) {
    const data = await get(`${entryUri}/${entryId}`)
    return mapApiToGraphQL(data)
}

async function getEntries(offset, limit) {
    const data = await get(`${entryUri}/${offset}/${limit}`);
    return data.map(e => mapApiToGraphQL(e));
}

async function updateEntryName({ Id, NameFirst, NameLast }) {
    await post(`${entryUri}/${Id}?NameFirst=${NameFirst}&NameLast=${NameLast}`)
    return true;
}

function mapApiToGraphQL(data) {
    return {
        Id: data.id,
        NameFirst: data.nameFirst,
        NameLast: data.nameLast,
    }
}

module.exports = {
    getAllEntries,
    getEntry,
    getEntries,
    updateEntryName
}
