(() => {
var exports = {};
exports.id = 4610;
exports.ids = [4610,3189];
exports.modules = {

/***/ 7135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c_": () => (/* binding */ hashPassword),
  "Gv": () => (/* binding */ verifyPassword)
});

// UNUSED EXPORTS: auth

;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./lib/auth.js


async function hashPassword(password) {
  const hashedPassword = await (0,external_bcryptjs_namespaceObject.hash)(password, 12);
  return hashedPassword;
}
async function verifyPassword(password, hashedPassword) {
  const isValid = await (0,external_bcryptjs_namespaceObject.compare)(password, hashedPassword);
  return isValid;
}
async function auth(req, res) {
  const session = await getSession({
    req
  });

  if (session) {
    res.json({
      content: "ok"
    });
  } else {
    res.json({
      error: "error"
    });
  }
}

/***/ }),

/***/ 6102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5499);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7135);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_session__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Profile({
  usuario
}) {
  var toaststate;
  const {
    data: session,
    status
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  const {
    0: ProfileFile,
    1: setProfileFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: ProfilePic,
    1: setProfilePic
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: Coverphoto,
    1: setCoverphoto
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: CoverFile,
    1: setCoverFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setloading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: education,
    1: setEducation
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.educacao : "");
  const {
    0: profissao,
    1: setProfissao
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.profissao : "");
  const {
    0: classe,
    1: setclasse
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.classe : "");
  const {
    0: tipoconta,
    1: settipoconta
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.tipo : "");
  const {
    0: skills,
    1: setSkills
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.habilidades : "");
  const {
    0: notes,
    1: setNotes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(usuario ? usuario.motivacao : "");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
    className: "content",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "col-md-3 mt-3",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "card card-primary card-outline",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "card-body box-profile",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: "text-center",
                style: {
                  backgroundImage: Coverphoto ? `url('${Coverphoto}')` : usuario && usuario.cover ? `url('${usuario.cover}')` : "url('/img/hero-bgg1.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  // Garante que a imagem seja totalmente visív
                  Maxwidth: "auto",
                  Maxheight: "auto",
                  backgroundRepeat: "no-repeat",
                  padding: "10px"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
                  className: "profile-user-img img-fluid img-circle",
                  src: usuario && usuario.avatar ? usuario.avatar : "https://picsum.photos/200/300",
                  alt: "User profile picture",
                  style: {
                    objectFit: "cover",
                    width: "100px",
                    // Defina a largura desejada
                    height: "100px",
                    padding: "10px"
                  }
                })
              }), usuario && usuario.estado ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-center text-success",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fa fa-circle"
                  }), " activo"]
                }), " "]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "text-center text-danger",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("small", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fa fa-circle"
                  }), " Inactivo"]
                }), " "]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
                className: "x profile-username text-center",
                children: usuario && usuario.nome.slice(0, 8) + " " + usuario.ultimonome.slice(0, 8)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                className: "text-muted text-center",
                children: usuario && usuario.classe
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
                className: "list-group list-group-unbordered mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                  className: "list-group-item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
                    children: "Parceiros"
                  }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                    className: "float-right",
                    children: usuario && usuario.parceiro ? usuario.parceiro : 0
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                  className: "list-group-item",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
                    children: "Seguidores"
                  }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                    className: "float-right",
                    children: usuario && usuario.seguidores ? usuario.seguidores : 0
                  })]
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "col-md-9 mt-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "card card-primary",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "card-header",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
                className: "card-title",
                children: "Sobre mim"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "card-body",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fas fa-certificate mr-1"
                  }), " Profiss\xE3o"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                  className: "text-muted",
                  children: profissao
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fas fa-book mr-1"
                  }), " Educa\xE7\xE3o"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                  className: "text-muted",
                  children: education
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "fas fa-pencil-alt mr-1"
                  }), " Habilidades"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                  className: "text-muted",
                  children: skills
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "far fa-file-alt mr-1"
                  }), " Motiva\xE7\xE3o"]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                  className: "text-muted",
                  children: notes
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {})]
              })
            })]
          })
        })]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const data = await fetch("https://portal-eta-eight.vercel.app/api/usuarios/user", {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: context.query.id
    })
  });
  const usuario = await data.json();
  return {
    props: {
      usuario
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 5666:
/***/ ((module) => {

"use strict";
module.exports = require("crypto-js");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5499], () => (__webpack_exec__(6102)));
module.exports = __webpack_exports__;

})();