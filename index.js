/**
 * loopback ~ public api
 */
 
var loopback = module.exports = require('./lib/loopback');

/**
 * Connectors
 */

loopback.Connector = require('./lib/connectors/base-connector');
loopback.Memory = require('./lib/connectors/memory');

/**
 * Types
 */

loopback.GeoPoint = require('jugglingdb/lib/geo').GeoPoint;