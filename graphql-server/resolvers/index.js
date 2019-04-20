var booking = require("./booking-resolver");
var entry = require("./entry-resolver");
var feature = require("./featureflag-resolver");

module.exports = [entry, booking, feature];
