"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sponsors = void 0;

require("core-js/modules/web.dom.iterable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sponsors =
/*#__PURE__*/
function () {
  function Sponsors(sponsors) {
    _classCallCheck(this, Sponsors);

    this.sponsors = sponsors;
  }

  _createClass(Sponsors, [{
    key: "getSponsors",
    value: function getSponsors() {
      return this.sponsors;
    }
  }, {
    key: "calcCash",
    value: function calcCash() {
      var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cash = this.sponsors.cash;
      cash.forEach(function (item) {
        return total += item;
      });
      return total;
    }
  }]);

  return Sponsors;
}();

exports.Sponsors = Sponsors;