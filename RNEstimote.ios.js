/**
 * @providesModule RNEstimote
 * @flow
 */
'use strict';

var NativeRNEstimote = require('NativeModules').RNEstimote;
var invariant = require('invariant');

/**
 * High-level docs for the RNEstimote iOS API can be written here.
 */

var RNEstimote = {
  test: function() {
    NativeRNEstimote.test();
  }
};

module.exports = RNEstimote;
