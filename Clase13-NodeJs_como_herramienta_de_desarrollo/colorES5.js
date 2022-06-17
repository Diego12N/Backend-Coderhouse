"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//LLmado a babel: "build": "babel ./origen.js -o ./destino.js -w"
var MAX = 255;

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);

    this.color = "color: (".concat(this.rndColor(), ", ").concat(this.rndColor(), ", ").concat(this.rndColor(), ")");
  }

  _createClass(Color, [{
    key: "rndColor",
    value: function rndColor() {
      return Math.floor(MAX * Math.random());
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }]);

  return Color;
}();

var miColor = new Color();
console.log(miColor.getColor());
