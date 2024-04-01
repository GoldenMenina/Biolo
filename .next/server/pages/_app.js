"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,3189];
exports.modules = {

/***/ 7686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modalComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4765);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5499);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_session__WEBPACK_IMPORTED_MODULE_5__]);
_lib_session__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function Layout({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    data: session,
    status
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  const {
    0: usuario,
    1: setusuario
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: newstatus,
    1: setnewstatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");

  const getsession = async () => {
    if (status === "unauthenticated" && router.pathname != "/inscritos") {
      const element = document.querySelector("body");
      element.classList.add("hero");

      if (router.pathname != "/inscricao") {
        router.replace("/login");
      }
    }

    if (status == "unauthenticated" || router.pathname == "/inscritos") {
      const element = document.querySelector("body");
      element.classList.remove("hero");
    }
  };

  const deleteCookies = async () => {
    await (0,_lib_session__WEBPACK_IMPORTED_MODULE_5__/* .deleteCookie */ .kT)("authsesh");
    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();
  };

  const getuser = async () => {
    const response = await (0,_lib_session__WEBPACK_IMPORTED_MODULE_5__/* .getDecryptedCookie */ .QN)("authsesh");

    if (!response) {
      try {
        const res = await fetch("/api/usuarios/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: session.user.email
          })
        });
        const response = await res.json();
        setusuario(response);
        (0,_lib_session__WEBPACK_IMPORTED_MODULE_5__/* .setEncryptedCookie */ .N5)("authsesh", response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setusuario(response);
    }
  }; // const getsesh = async () => {
  //   const response = await getDecryptedCookie("authsesh");
  // };
  // useEffect(() => {
  //   $("#inactiveAccountModal").modal("show");
  //   $("#inactiveAccountModal").modal({
  //     backdrop: "static",
  //     keyboard: false,
  //   });
  // }, []);


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getsession();

    if (usuario == null) {
      getuser();
    }

    setInterval(() => {
      getuser();
    }, 5000); // Intervalo de 5 segundos

    setnewstatus(status);
  }, [status, session]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "wrapper",
    children: [usuario && !usuario.estado && router.pathname != "/perfil" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_modalComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), newstatus == "authenticated" ? router.pathname != "/empresa/[empresa_id]" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: router.pathname == "/login" ? "wrapper login-page-inactivo" : router.pathname == "/recuperacao" ? "wrapper login-page-inactivo" : router.pathname == "/empresa/[empresa_id]" ? "wrapper login-page-inactivo" : "login-page-activo",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
          className: "main-header navbar navbar-expand navbar-white navbar-light fixed-top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "navbar-nav",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: "nav-link",
                "data-widget": "pushmenu",
                href: "#",
                role: "button",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                  className: "fas fa-bars"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/comunidade",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "nav-link",
                  role: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                    className: `fas fa-home ${router.pathname == "/comunidade" && " text-primary"}`
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/membros",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "nav-link",
                  role: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                    className: `fas fa-users ${router.pathname == "/membros" && " text-primary"}`
                  })
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item ",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/inbox",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "nav-link",
                  role: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                    className: `fas fa-envelope ${router.pathname == "/inbox" && " text-primary"}`
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "navbar-nav ml-auto",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: "nav-link",
                href: "#",
                role: "button",
                onClick: () => {
                  deleteCookies();
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                  className: "fas fa-power-off text-danger"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "/perfil",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  className: "nav-link",
                  role: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                    className: `fas fa-user ${router.pathname == "/perfil" && " text-primary"}`
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
          className: "main-sidebar sidebar-dark-primary elevation-4 ",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              class: "brand-link",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "/img/logo.png",
                alt: "ANJE",
                className: "img-fluid",
                style: {
                  opacity: " .8"
                }
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "sidebar",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "user-panel mt-3 pb-3 mb-3 d-flex",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "image",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                  src: usuario && usuario.avatar ? usuario.avatar : "https://cdn-icons-png.flaticon.com/128/1144/1144760.png",
                  className: "img-circle elevation-2",
                  alt: "User Image",
                  style: {
                    objectFit: "cover",
                    width: "45px",
                    // Defina a largura desejada
                    height: "45px"
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "info",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  href: "#",
                  className: "d-block",
                  children: usuario && usuario.nome.slice(0, 8) + " " + usuario.ultimonome.slice(0, 10)
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "form-inline",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "input-group",
                "data-widget": "sidebar-search",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
                  className: "form-control form-control-sidebar",
                  type: "search",
                  placeholder: "Pesquisar",
                  "aria-label": "Search"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "input-group-append",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                    className: "btn btn-sidebar",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                      className: "fas fa-search fa-fw"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("nav", {
              className: "mt-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
                className: "nav nav-pills nav-sidebar flex-column",
                "data-widget": "treeview",
                role: "menu",
                "data-accordion": "false",
                children: [usuario && usuario.tipo == "administrador" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-header",
                    children: "Gest\xE3o Administrativo"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item disabled",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/gestao-usuarios",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link disabled",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-users"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Administradores"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/inscricoes",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-pencil-alt"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Inscri\xE7\xF5es"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/recursos",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-book"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Recursos"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/brevemente",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-users-cog"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Membros"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/noticias",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-calendar-alt"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Noti\xE7ias"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/brevemente",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        href: "#",
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-image"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Galeria"
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-header",
                    children: "Ferramentas e Recursos"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/recursos",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-book"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Recursos"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                      href: "/recursos",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                        className: "nav-link",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                          className: "nav-icon fas fa-calendar-alt"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                          children: "Eventos"
                        })]
                      })
                    })
                  })]
                })]
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "content-wrapper",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "content",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "",
              style: {
                marginTop: "60px"
              },
              children: newstatus == "authenticated" && children
            })
          })
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      id: "hero",
      className: "containerNew login-page-activo",
      children: children
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "containerNew",
      children: [children, " "]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("aside", {
      className: "control-sidebar control-sidebar-dark"
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modalComponent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/modalComponent.js







const InactiveAccountModal = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal fade show",
      id: "inactiveAccountModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "inactiveAccountModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog modal-dialog-centered",
        role: "document",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content dark-mode",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-header",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
              className: "modal-title",
              id: "inactiveAccountModalLabel",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                icon: "user"
              }), " Conta Inativa"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-body",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Sua conta est\xE1 atualmente inativa. Carregue o comprovativo do m\xEAs corrente ou entre em contato com o suporte para assist\xEAncia."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-footer",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: () => {
                router.replace("/perfil");
              },
              children: "Ir ao perfil"
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const modalComponent = (InactiveAccountModal);

/*#__PURE__*/
jsx_runtime_.jsx("style", {
  jsx: true,
  children: `
  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .modal-dialog {
    max-width: 400px;
    margin: auto;
  }

  .modal-content {
    background-color: #333; /* Dark mode background color */
    color: #fff; /* Dark mode text color */
    border-radius: 8px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    text-align: center;
  }

  .modal-body {
    padding: 15px;
  }

  .btn-primary {
    background-color: #007bff; /* Bootstrap primary color */
    color: #fff;
  }

  .btn-primary:hover {
    background-color: #0056b3; /* Darken the primary color on hover */
  }

  .dark-mode {
    /* Additional styles for dark mode */
  }
`
});

/***/ }),

/***/ 9613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["session"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function App(_ref) {
  let {
    Component,
    pageProps: {
      session
    }
  } = _ref,
      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const element = document.querySelector("body");
    element.classList.add("dark-mode");

    if (router.pathname == "/login" || router.pathname == "/recuperacao") {
      const element = document.querySelector("body");
      element.classList.add("hold-transition", "login-page");
    } else {
      const element = document.querySelector("body");
      element.classList.remove("login-page");
      element.classList.add("sidebar-mini", "layout-fixed", "auto");
    }
  }, [router]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_5__.SessionProvider, {
    session: session,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          rel: "stylesheet",
          href: "../plugin/fontawesome-free/css/all.min.css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          rel: "stylesheet",
          href: "../plugin/datatables-bs4/css/dataTables.bootstrap4.min.css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          rel: "stylesheet",
          href: "../plugin/datatables-responsive/css/responsive.bootstrap4.min.css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          rel: "stylesheet",
          href: "../plugin/datatables-buttons/css/buttons.bootstrap4.min.css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          href: "../dist/css/style.css",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          rel: "stylesheet",
          href: "../dist/css/adminlte.min.css"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("script", {
          src: "../plugin/jquery/jquery.min.js"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("script", {
          src: "../plugin/bootstrap/js/bootstrap.bundle.min.js"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("script", {
          src: "../dist/js/adminlte.min.js"
        }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
          href: "../dist/css/newstyle.css",
          rel: "stylesheet"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6932,1664,5499], () => (__webpack_exec__(9613)));
module.exports = __webpack_exports__;

})();