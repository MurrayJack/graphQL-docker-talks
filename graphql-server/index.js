var express = require('express');
var graphqlHTTP = require('express-graphql');
var cors = require("cors");
var {
    makeExecutableSchema
} = require("graphql-tools");

var typeDefs = require("./types");
var resolvers = require("./resolvers");

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

var app = express();
app.use(cors());

app.use('/', graphqlHTTP({
    schema,
    graphiql: true,
}));

const port = 3000;

app.listen(port);
console.log(`Running on: http://localhost:${port}/`);