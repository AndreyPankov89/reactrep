"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _sponsors = require("./sponsors");

var _employers = require("./employers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    _classCallCheck(this, MakeBusiness);

    ;
  }

  _createClass(MakeBusiness, [{
    key: "print",
    value: function print(_ref) {
      var _console;

      var owner = _ref.owner,
          _ref$director = _ref.director,
          director = _ref$director === void 0 ? 'Victor' : _ref$director,
          cash = _ref.cash,
          emp = _ref.emp;
      var eu = _sponsors.sponsors.eu,
          rus = _sponsors.sponsors.rus;
      var sumSponsors = eu.concat(rus, 'unexpected sponsor');
      console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(_sponsors.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var business = new MakeBusiness();
business.print({
  owner: 'Sam',
  cash: _sponsors.money,
  emp: _employers.employersNames
});