webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/Landing.js":
/*!**************************************!*\
  !*** ./components/styles/Landing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width:100%;\n    height:100vh;\n    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.35)),", ";\n    background-size:cover;\n    background-repeat:no-repeat;\n    position:relative;\n\n    .Curved__Wrapper{\n        position:relative;\n        transform: rotate(5deg);\n        top:8%;\n        left:-4%;\n    }\n    \n    path {\n        fill: transparent;\n    }\n\n    .Landing--Text{\n        font-size: 12px;\n        fill: white;\n        font-family: sans-serif;\n        text-transform:uppercase;\n        letter-spacing:.45rem;\n        font-weight:800;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var LandingStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.backgroundImage;
});
/* harmony default export */ __webpack_exports__["default"] = (LandingStyled);

/***/ }),

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
/* harmony import */ var _components_styles_Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/Landing */ "./components/styles/Landing.js");
/* harmony import */ var _components_styles_CurvedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/CurvedText */ "./components/styles/CurvedText.js");

var _jsxFileName = "/Users/briantrang/brandon-lemon/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n\n  img {\n    width: 250px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//import { useEffect } from "react";



var GalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var SizeSelector = function SizeSelector(props) {
  //needs onChange Handler
  return __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.options[0].values.map(function (value) {
    return __jsx("option", {
      key: value.value,
      value: value.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
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
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_styles_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundImage: "url(".concat("/static/icecream.jpg", ")"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_styles_CurvedText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(GalleryWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, products.map(function (product) {
    return __jsx("div", {
      key: product.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, product.handle), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, product.description), __jsx("img", {
      src: product.images[0].src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, product.variants[0].price), __jsx(SizeSelector, {
      options: product.options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1431deddf8c885f50941.hot-update.js.map