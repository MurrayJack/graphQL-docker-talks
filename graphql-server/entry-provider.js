const get = require("./provider");

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
}
