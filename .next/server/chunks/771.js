"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 1771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PorkCutsMap)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4133);
/* harmony import */ var _BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const beefCuts = [{
  top: '79.66%',
  left: '78.38%',
  title: 'CHISPE'
}, {
  top: '54.37%',
  left: '75.25%',
  title: 'BIFANAS'
}, {
  top: '65.48%',
  left: '57.38%',
  title: 'EMTREMEADA'
}, {
  top: '65.01%',
  left: '42.50%',
  title: 'ENTRECOSTO'
}, {
  top: '41.37%',
  left: '31.25%',
  title: 'PÁ'
}, {
  top: '21.53%',
  left: '22.63%',
  title: 'CACHAÇO'
}, {
  top: '8.77%',
  left: '32.75%',
  title: 'COSTELETA DE LOMBO'
}, {
  top: '6.40%',
  left: '52.38%',
  title: 'PIANO/LOMBO PARA ASSAR'
}, {
  top: '12.07%',
  left: '81.88%',
  title: 'LOMBINHO'
}, {
  top: '20.34%',
  left: '7.38%',
  title: 'ORELHA'
}, {
  top: '32.40%',
  left: '13.13%',
  title: 'CABEÇA'
}];
function PorkCutsMap() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    className: (_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "sec-title text-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        children: "Conh\xE7a os cortes"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
        children: "Cortes Suinos"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
        src: "/assets/images/pork.png",
        alt: "Beef Cuts",
        className: (_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default().image)
      }), beefCuts.map((cut, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default().point),
        style: {
          top: cut.top,
          left: cut.left
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: (_BeefCutsMap_module_css__WEBPACK_IMPORTED_MODULE_2___default().tooltip),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("strong", {
            children: cut.title
          })
        })
      }, index))]
    })]
  });
}

/***/ })

};
;