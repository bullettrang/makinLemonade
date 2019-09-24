webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/briantrang/brandon-lemon/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n\n  img {\n    width: 250px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width:100%;\n    height:100vh;\n    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.35)),", ";\n    background-size:cover;\n    background-repeat:no-repeat;\n    position:relative;\n\n    .Curved__Wrapper{\n        position:relative;\n        transform: rotate(5deg);\n        top:8%;\n        left:-4%;\n    }\n    \n    path {\n        fill: transparent;\n    }\n\n    .Landing--Text{\n        font-size: 12px;\n        fill: white;\n        font-family: sans-serif;\n        text-transform:uppercase;\n        letter-spacing:.45rem;\n        font-weight:800;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//import { useEffect } from "react";

var LandingStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.backgroundImage;
});

var CurvedText = function CurvedText() {
  return __jsx("svg", {
    viewBox: "0 0 500 500",
    className: "Curved__Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("path", {
    id: "curve",
    d: "M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("text", {
    width: "500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("textPath", {
    className: "Landing--Text",
    xlinkHref: "#curve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hardship Community Struggle")));
};

var GalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

var SizeSelector = function SizeSelector(props) {
  return __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.options.values.map(function (value) {
    __jsx("option", {
      key: value.value,
      value: value.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, value.value);
  }));
};

var Index = function Index(props) {
  var products = props.products;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(LandingStyled, {
    backgroundImage: "url(".concat("/static/icecream.jpg", ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(CurvedText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(GalleryWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, products.map(function (product) {
    return __jsx("div", {
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, product.handle), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, product.description), __jsx("img", {
      src: product.images[0].src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, product.variants[0].price));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.02d8ac8dc8b1bbf80628.hot-update.js.map