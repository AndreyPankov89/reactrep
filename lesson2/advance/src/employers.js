"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Employers = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employers =
/*#__PURE__*/
function () {
  function Employers(emp) {
    _classCallCheck(this, Employers);

    this.employers = emp.filter(function (name) {
      return name.length > 0 && name.length != "";
    }).map(function (name) {
      return name.toLowerCase().trim();
    });
  }

  _createClass(Employers, [{
    key: "list",
    value: function list() {
      return this.employers;
    }
  }]);

  return Employers;
}();

exports.Employers = Employers;