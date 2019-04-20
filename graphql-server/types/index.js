const {
    mergeTypes
} = require("merge-graphql-schemas");

var booking = require("./booking-type");
var entry = require("./entry-type");
var feature = require("./featureflag-type");

module.exports = mergeTypes([booking, entry, feature], {
    all: true
});