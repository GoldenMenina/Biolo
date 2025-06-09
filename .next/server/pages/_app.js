"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AdditionalCommentsModal.js




const AdditionalCommentsModal = ({
  isOpen,
  onClose,
  comments,
  setComments,
  onSend
}) => {
  if (!isOpen) return null;
  return /*#__PURE__*/_jsx("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center",
    children: /*#__PURE__*/_jsxs("div", {
      className: "bg-white p-6 rounded-lg max-w-md w-full",
      children: [/*#__PURE__*/_jsx("h2", {
        className: "text-xl font-semibold mb-4",
        children: "Additional Comments"
      }), /*#__PURE__*/_jsx("textarea", {
        value: comments,
        onChange: e => setComments(e.target.value),
        placeholder: "Enter any additional comments about your order...",
        className: "w-full h-32 p-2 border border-gray-300 rounded mb-4"
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex justify-end space-x-2",
        children: [/*#__PURE__*/_jsx("button", {
          onClick: onClose,
          className: "px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300",
          children: "Cancel"
        }), /*#__PURE__*/_jsx("button", {
          onClick: onSend,
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
          children: "Send Order"
        })]
      })]
    })
  });
};

/* harmony default export */ const components_AdditionalCommentsModal = ((/* unused pure expression or super */ null && (AdditionalCommentsModal)));
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/Modal.js





const Modal = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-1080564412" + " " + "modal-overlay",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1080564412" + " " + "modal-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1080564412" + " " + "modal-message",
        children: "Email adicionado para receber newsletter"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: onClose,
        className: "jsx-1080564412" + " " + "modal-close-button",
        children: "Fechar"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1080564412",
      children: [".modal-overlay.jsx-1080564412{z-index:9999 position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".modal-content.jsx-1080564412{background-color:#FFFFFF;padding:24px;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);max-width:300px;width:100%;}", ".modal-message.jsx-1080564412{color:#24712F;font-size:20px;font-weight:bold;margin-bottom:16px;}", ".modal-close-button.jsx-1080564412{background-color:#24712F;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}", ".modal-close-button.jsx-1080564412:hover{background-color:#1e5f26;}"]
    })]
  });
};

/* harmony default export */ const components_Modal = (Modal);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(3554);
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);
;// CONCATENATED MODULE: ./components/layout/layout.js









function Layout({
  children
}) {
  const router = (0,router_.useRouter)();
  const {
    0: usuario,
    1: setUsuario
  } = (0,external_react_.useState)(null);
  const {
    0: lang,
    1: setLang
  } = (0,external_react_.useState)('');
  const {
    0: additionalComments,
    1: setAdditionalComments
  } = (0,external_react_.useState)('');
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: cartItems,
    1: setCartItems
  } = (0,external_react_.useState)([]);

  const closeModal = () => setIsModalOpen(false);

  const openModal = e => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  var totalPrice = cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);

  const languageChange = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', newLang);
    setLang(newLang);
    router.push(newLang === 'en' ? '/ENG' : '/');
    router.events.on('routeChangeComplete', () => {
      // Reload the page after navigation
      router.reload();
    });
  };

  const loadCartItems = () => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (savedCartItems.length === cartItems.length) {
      return false;
    }

    totalPrice = savedCartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
    setCartItems(savedCartItems);
  };

  (0,external_react_.useEffect)(() => {
    const storedLang = localStorage.getItem('lang') || 'pt';
    setLang(storedLang);
    loadCartItems();
  }, [router.asPath]);
  (0,external_react_.useEffect)(() => {
    // Initial load
    loadCartItems(); // Set up an interval to load cart items every second

    const intervalId = setInterval(loadCartItems, 900); // Clear the interval when the component unmounts

    return () => clearInterval(intervalId);
  }, []);
  (0,external_react_.useEffect)(() => {
    // Cleanup listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', () => {});
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "boxed_wrapper ltr",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "preloader"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "xs-sidebar-group info-group info-sidebar",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "xs-overlay xs-bg-black"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "xs-sidebar-widget",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sidebar-widget-container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "widget-heading",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#",
              className: "close-side-widget",
              children: "X"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "sidebar-textwidget",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "sidebar-info-contents",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "content-inner",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "logo text-center",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "index.html",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/assets/images/giannulogo.png",
                      style: {
                        height: "160px",
                        width: "auto"
                      },
                      alt: ""
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "content-box",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                    style: {
                      color: 'black',
                      marginBottom: "20px"
                    },
                    children: ["Carrinho ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-shopping-cart-1"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    style: {
                      marginTop: "10px"
                    },
                    children: [cartItems.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        style: {
                          marginBottom: "10px",
                          position: "relative"
                        },
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          style: {
                            marginRight: "5px"
                          },
                          children: [item.corte, " (", item.categoria, ")"]
                        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          style: {
                            marginRight: "3px"
                          },
                          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_number_format_default()), {
                            value: item.preco,
                            displayType: "text",
                            thousandSeparator: " ",
                            allowNegative: false,
                            suffix: " kz",
                            fixedDecimalScale: true
                          })
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                          children: [" X ", item.quantity]
                        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          className: "btn btn-sm btn-light add-btn debug-button",
                          "data-id": item.id,
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-plus"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          "data-id": item.id,
                          className: "btn btn-sm btn-light minus-btn debug-button",
                          style: {
                            fontSize: "0.675rem",
                            lineHeight: 1.3,
                            marginLeft: "5px",
                            backgroundColor: "#f0f0f0",
                            position: "relative",
                            zIndex: 10
                          },
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-minus"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          "data-id": item.id,
                          className: "btn btn-sm btn-light deletebtn debug-button pull-right",
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "fa fa-times"
                          })
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
                    }, item.id)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        style: {
                          color: "#000"
                        },
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                          children: ["Total: ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            style: {
                              color: "#000"
                            },
                            children: ["         ", /*#__PURE__*/jsx_runtime_.jsx((external_react_number_format_default()), {
                              value: totalPrice,
                              displayType: "text",
                              thousandSeparator: " ",
                              allowNegative: false,
                              suffix: " kz",
                              fixedDecimalScale: true
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      style: {
                        marginTop: "15px"
                      },
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                        id: "fazercompra",
                        "data-id": totalPrice,
                        className: "btn btn-success",
                        children: ["Finalizar ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fa fa-arrow-right"
                        })]
                      })
                    })]
                  })]
                })]
              })
            })
          })]
        })
      })]
    }), (router.pathname === "/" || router.pathname === "/ENG") && router.pathname != "/admin/dashboard" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "main-header style-two",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-top",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "auto-container clearfix",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "top-left pull-left clearfix",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "left-info pull-left clearfix",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "language",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "lang-btn",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "icon flaticon-location"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "txt",
                    children: [lang == 'en' ? 'English' : 'português', " "]
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "arrow fa fa-angle-down"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "lang-dropdown",
                  children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        onClick: () => {
                          languageChange();
                        },
                        href: "#index.html",
                        children: lang == 'pt' ? 'English' : 'português'
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-links clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: "https://www.facebook.com/p/Giannu-Carnes-100063959979427/7",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    target: "_blank",
                    href: "https://www.instagram.com/giannucarnes/",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-instagram"
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "logo-box",
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "logo",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "index.html",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/giannulogo.png",
                    style: {
                      height: "90px",
                      width: "auto"
                    },
                    alt: ""
                  })
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "top-right pull-right",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "menu-right-content pull-left clearfix",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "search-box-outer",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "dropdown",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "search-box-btn",
                    type: "button",
                    id: "dropdownMenu3",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "flaticon-search"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                    className: "dropdown-menu pull-right search-panel",
                    "aria-labelledby": "dropdownMenu3",
                    children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "panel-outer",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "form-container",
                        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
                          method: "post",
                          action: "blog.html",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                              type: "search",
                              name: "field-name",
                              placeholder: "Pesquisar....",
                              required: ""
                            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                              type: "submit",
                              className: "search-btn",
                              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "fas fa-search"
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "cart-box",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#shop-1.html",
                  className: "navSidebar-button",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-shopping-cart-1"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    "x-text": "cart.length",
                    children: cartItems.reduce((total, item) => total + item.quantity, 0)
                  })]
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-upper",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "outer-box clearfix",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "menu-area",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mobile-nav-toggler",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu navbar-expand-md navbar-light",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "collapse navbar-collapse show clearfix",
                  id: "navbarSupportedContent",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "navigation clearfix",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang == 'en' ? '/ENG/ourcompany' : '/PT/aempresa',
                        children: lang === 'en' ? 'About Us' : 'Sobre nós'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos',
                        children: lang === 'en' ? 'Services' : 'Serviços'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos',
                        children: lang === 'en' ? 'Products' : 'Produtos'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos',
                        children: lang === 'en' ? 'Contact Us' : 'Contacte-nos'
                      })
                    })]
                  })
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "outer-box clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
              className: "logo-box pull-left",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#index.html",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/giannulogo.png",
                  style: {
                    height: "70px",
                    width: "auto"
                  },
                  alt: ""
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-area pull-right",
              children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu clearfix"
              })
            })]
          })
        })
      })]
    }), router.pathname != "/" && router.pathname != "/ENG" && router.pathname != "/admin/dashboard" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "main-header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-top",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "top-info",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "info-list clearfix",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-location-pin"
                }), "Avendida Pedro de castro Van-D\xFAnem Loy, Talatona"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-envelope"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:vendas@giannu.co.ao",
                  children: "vendas@giannu.co.ao"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "phone",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-dial"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "tel:244931781843",
                  children: ["+244 931 781 843 ", lang]
                })]
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-upper",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "outer-box clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "logo-box",
              children: /*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "logo",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/images/giannulogo.png",
                    alt: "",
                    style: {
                      height: "80px",
                      width: "auto"
                    }
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "menu-area pull-right",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mobile-nav-toggler",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "icon-bar"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu navbar-expand-md navbar-light",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "collapse navbar-collapse show clearfix",
                  id: "navbarSupportedContent",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "navigation clearfix",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/ourcompany' : '/PT/aempresa',
                        children: lang === 'en' ? 'About Us' : 'Sobre nós'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos',
                        children: lang === 'en' ? 'Services' : 'Serviços'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos',
                        children: lang === 'en' ? 'Products' : 'Produtos'
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos',
                        children: lang === 'en' ? 'Contact Us' : 'Contacte-nos'
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "menu-right-content pull-left clearfix",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "search-box-outer",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "dropdown",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "search-box-btn",
                      type: "button",
                      id: "dropdownMenu3",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "flaticon-search"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      className: "dropdown-menu pull-right search-panel",
                      "aria-labelledby": "dropdownMenu3",
                      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "panel-outer",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "form-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
                            method: "post",
                            action: "blog.html",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                              className: "form-group",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                                type: "search",
                                name: "field-name",
                                value: "",
                                placeholder: "Search....",
                                required: ""
                              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "search-btn",
                                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                                  className: "fas fa-search"
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "cart-box",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    href: "shop-1.html",
                    className: "navSidebar-button",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "flaticon-shopping-cart-1"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      "x-text": "cart.length",
                      children: cartItems.reduce((total, item) => total + item.quantity, 0)
                    })]
                  })
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "outer-box clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
              className: "logo-box pull-left",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/assets/images/giannulogo.png",
                  style: {
                    height: "70px",
                    width: "auto"
                  },
                  alt: ""
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-area pull-right",
              children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu clearfix"
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mobile-menu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "menu-backdrop"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close-btn",
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fas fa-times"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "menu-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "nav-logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#index.html",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "assets/images/logo-2.png",
              alt: "",
              title: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "menu-outer"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "contact-info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Contact Info"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: "Avendida Pedro de castro Van-D\xFAnem Loy, Talatona"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "mt-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "Dept. Vendas"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:+244931781843",
                children: "+244  931 781 843"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:vendas@giannu.co.ao",
                children: "vendas@giannu.co.ao "
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "mt-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "Pos-Vendas"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:+244933410964",
                children: "+244 933 410 964"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:pos-venda@giannu.co.ao ",
                children: "pos-venda@giannu.co.ao"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "social-links",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/p/Giannu-Carnes-100063959979427/",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "fab fa-facebook-square"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.instagram.com/giannucarnes/",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "fab fa-instagram"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#index.html",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "fab fa-youtube"
                })
              })
            })]
          })
        })]
      })]
    }), children, /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "main-footer mr-0",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "auto-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-top",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "widget-section",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row clearfix",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-md-6 col-sm-12 footer-column",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "footer-widget logo-widget",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
                    className: "footer-logo",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#index.html",
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "assets/images/giannulogo.png",
                        style: {
                          height: "70px",
                          width: "auto"
                        },
                        alt: ""
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "assets/images/feitoangola.jpg",
                      style: {
                        height: "70px",
                        width: "auto",
                        marginLeft: "20pz"
                      },
                      alt: ""
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                      children: ["O nosso foco \xE9 a satisfa\xE7\xE3o do cliente na", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                        children: " Qualidade"
                      }), " dos nossos", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                        children: " Servi\xE7os"
                      }), " & ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
                        children: "Produtos."
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-md-6 col-sm-12 footer-column",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "footer-widget contact-widget",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "info clearfix",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-phone"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Ligue para n\xF3s"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
                          children: "(Dept. Vendas)"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#tel:+244931781843",
                          children: "+244 931 781 843"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
                        className: "mt-2",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                            children: "(Pos-vendas)"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#tel:+244933410964",
                          children: "+244 933 410 964    "
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-maps-and-flags"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Endere\xE7o"
                      }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                        children: "Avendida Pedro de castro Van-D\xFAnem Loy, Talatona"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-mail"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Correiro El\xEAtronico"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("small", {
                          children: "(Dept. Vendas)"
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "mailto:clientes.particulares@giannu.co.ao",
                          children: "vendas@giannu.co.ao"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
                        className: "mt-2",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: /*#__PURE__*/jsx_runtime_.jsx("small", {
                            children: "(Pos-vendas)"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "mailto:clientes.particulares@giannu.co.ao",
                          children: "pos-venda@giannu.co.ao"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "social-links clearfix",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "https://www.facebook.com/p/Giannu-Carnes-100063959979427/",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fab fa-facebook-f"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/giannucarnes/",
                        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "fab fa-instagram"
                        })
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-md-6 col-sm-12 footer-column",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "footer-widget newsletter-widget",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "widget-title",
                    children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
                      children: "Newsletter"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(components_Modal, {
                      isOpen: isModalOpen,
                      onClose: closeModal
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "widget-content",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "Fique atualizado sobre tudo que \xE9 novo e importante!"
                    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
                      onSubmit: openModal,
                      className: "newsletter-form",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "email",
                          name: "email",
                          placeholder: "Email",
                          required: ""
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          type: "submit",
                          onClick: () => {},
                          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "flaticon-paper-plane-1"
                          })
                        })]
                      })
                    })]
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "footer-bottom clearfix",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "copyright pull-left",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
              children: ["Direitos autorais \xA9 2024. Giannu Carnes. Todos os direitos reservados", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                target: "_blank",
                children: "Giannu Carnes"
              }), "."]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "footer-nav pull-right clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "index.html",
                children: "P\xE1gina Inicial"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/PT/aempresa",
                children: "Sobre n\xF3s"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/PT/osnossosprodutos",
                children: "Produtos"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/PT/contacte-nos",
                children: "Contacte-nos"
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "scroll-top scroll-to-target",
      "data-target": "html",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "fa fa-arrow-up"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      "x-show": "total > 0",
      className: "scroll-top  navSidebar-button",
      style: {
        marginRight: "60px"
      },
      "data-target": "html",
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "flaticon-shopping-cart-1"
      }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        style: {
          color: "white",
          marginTop: "-10px",
          fontSize: "11px",
          fontWeight: "900"
        },
        children: [cartItems.length, " "]
      }), " "]
    })]
  });
}
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
;// CONCATENATED MODULE: ./pages/_app.js
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

  const router = (0,router_.useRouter)();
  /*  useEffect(() => {
      const element = document.querySelector("body");
  
  
      element.classList.add("color-theme-blue" ,"mont-font");
    }, [router]); */

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charset: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Giannu Carnes - Melhor Carne de Angola"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/assets/images/favicon.ico",
        type: "image/x-icon"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://as.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/font-awesome-all.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/flaticon.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/owl.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/bootstrap.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/jquery.fancybox.min.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/animate.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/color.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/style.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "/assets/css/responsive.css",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      src: "/assets/js/btns.js" // External script URL
      ,
      strategy: "afterInteractive" // Load the script lazily after the page loads

    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/jquery.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/popper.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/bootstrap.min.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/owl.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/wow.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/validation.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/jquery.fancybox.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/appear.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/scrollbar.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/nav-tool.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/script.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      defer: true,
      src: "/assets/js/mainscript.js"
    })]
  });
}

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

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [82,676,664], () => (__webpack_exec__(9498)));
module.exports = __webpack_exports__;

})();