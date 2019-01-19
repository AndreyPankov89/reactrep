"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash;

function calcCash() {
  var total = 0;

  for (var _len = arguments.length, cash = new Array(_len), _key = 0; _key < _len; _key++) {
    cash[_key] = arguments[_key];
  }

  cash.forEach(function (item) {
    return total += item;
  });
  return total;
}

var money = calcCash.apply(void 0, [null].concat(_toConsumableArray(cash)));
exports.money = money;