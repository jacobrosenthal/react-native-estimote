/**
 * @providesModule RNEstimote
 * @flow
 */
'use strict';

var NativeRNEstimote = require('NativeModules').RNEstimote;

NativeRNEstimote.DEFS = require('./ESTNearableDefinitions.js');

module.exports = NativeRNEstimote;
