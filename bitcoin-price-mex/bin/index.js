#!/usr/bin/env node
'use strict'
var currentPrice = require('./current-price.js');
var dayHistory = require('./day-history.js');
var acceptedCurrencies = ['USD'];

process.argv.forEach(function(val, index, args) {
  if (val === '-g') {
    dayHistory(function(history) {
      console.log(history);
    });
  }
});

// Default if no arguments given
if (process.argv.length === 2) {
  currentPrice(acceptedCurrencies[0], function(price) {
    console.log(price);
  });
}
