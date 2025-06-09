"use strict";
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClientForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ClientForm({
  show,
  onClose,
  clienteEditado,
  onSave
}) {
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    nome: '',
    telemovel: '',
    segmento_de_cliente_id: ''
  });
  const {
    0: segmentos,
    1: setSegmentos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (clienteEditado) {
      setForm(clienteEditado);
    } else {
      setForm({
        nome: '',
        telemovel: '',
        segmento_de_cliente_id: ''
      });
    }
  }, [clienteEditado]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchSegmentos() {
      const {
        data,
        error
      } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('SegmentoDeClientes').select('*');
      if (!error) setSegmentos(data);
    }

    fetchSegmentos();
  }, []);

  function handleChange(e) {
    const {
      name,
      value
    } = e.target;
    setForm(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (clienteEditado) {
        const {
          error
        } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Cliente').update({
          nome: form.nome,
          telemovel: form.telemovel,
          segmento_de_cliente_id: form.segmento_de_cliente_id
        }).eq('id', form.id);
        if (error) throw error;
      } else {
        const {
          error
        } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Cliente').insert([form]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar cliente.');
    }

    setLoading(false);
  }

  if (!show) return null;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "modal show d-block",
    style: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "modal-dialog",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-header",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
            className: "modal-title",
            children: clienteEditado ? 'Editar Cliente' : 'Novo Cliente'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            className: "btn-close",
            onClick: onClose
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "modal-body",
          children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
                className: "form-label",
                children: "Nome"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                name: "nome",
                className: "form-control",
                value: form.nome,
                onChange: handleChange,
                required: true
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
                className: "form-label",
                children: "Telefone"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                name: "telemovel",
                className: "form-control",
                value: form.telemovel,
                onChange: handleChange,
                required: true
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mb-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
                className: "form-label",
                children: "Segmento de Cliente"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                name: "segmento_de_cliente_id",
                className: "form-select",
                value: form.segmento_de_cliente_id,
                onChange: handleChange,
                required: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: "",
                  children: "Selecione"
                }), segmentos.map(seg => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: seg.id,
                  children: seg.designacao
                }, seg.id))]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                type: "submit",
                className: "btn btn-success me-2",
                children: "Salvar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                type: "button",
                className: "btn btn-secondary",
                onClick: onClose,
                children: "Cancelar"
              })]
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClientList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function ClientList({
  onEdit
}) {
  const {
    0: clientes,
    1: setClientes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  async function fetchClientes() {
    setLoading(true);
    const {
      data,
      error
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Cliente').select(`
        id,
        nome,
        telemovel,
        segmento:segmento_de_cliente_id(designacao)
      `);
    if (error) console.error('Erro ao carregar clientes:', error);else setClientes(data);
    setLoading(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchClientes();
  }, []);

  async function deletarCliente(id) {
    if (!confirm('Deseja eliminar este cliente?')) return;
    const {
      error
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Cliente').delete().eq('id', id);
    if (error) console.error('Erro ao deletar:', error);else fetchClientes();
  }

  const filtered = clientes.filter(c => c.nome.toLowerCase().includes(search.toLowerCase()) || c.telemovel.includes(search));
  if (loading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        type: "text",
        className: "form-control w-50",
        placeholder: "Buscar por nome ou telefone",
        value: search,
        onChange: e => setSearch(e.target.value)
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "table-responsive",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
        className: "table table-striped align-middle",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
              children: "Nome"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
              children: "Telefone"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
              children: "Segmento"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
              children: "A\xE7\xF5es"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
          children: filtered.map(cliente => {
            var _cliente$segmento;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: cliente.nome
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: cliente.telemovel
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: ((_cliente$segmento = cliente.segmento) === null || _cliente$segmento === void 0 ? void 0 : _cliente$segmento.designacao) || '—'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  className: "btn btn-sm btn-warning me-2",
                  onClick: () => onEdit(cliente),
                  children: "Editar"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  className: "btn btn-sm btn-danger",
                  onClick: () => deletarCliente(cliente.id),
                  children: "Eliminar"
                })]
              })]
            }, cliente.id);
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loader() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "d-flex justify-content-center align-items-center",
    style: {
      minHeight: '200px'
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "spinner-border text-primary",
      role: "status"
    })
  });
}

/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderDetailsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function OrderDetailsModal({
  show,
  orderId,
  onClose
}) {
  var _order$endereco, _order$endereco$clien, _order$status, _order$endereco2, _order$endereco3;

  const {
    0: order,
    1: setOrder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: produtos,
    1: setProdutos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (show && orderId) {
      fetchOrderDetails(orderId);
    }
  }, [show, orderId]);

  async function fetchOrderDetails(id) {
    setLoading(true);
    const {
      data: encomenda
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Encomenda').select(`
        *,
        status:status_da_encomenda_id(designacao),
        endereco: endereco_id (
          etiqueta,
          referencia_geografica,
          cliente:cliente_id ( nome )
        )
      `).eq('id', id).single();
    const {
      data: itens
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('ProdutoEncomendado').select(`
        quantidade_encomendada,
        preco:preco_de_produto_id (
          preco_unitario,
          produto:produto_id (
            designacao
          )
        )
      `).eq('encomenda_id', id);
    setOrder(encomenda);
    setProdutos(itens || []);
    setLoading(false);
  }

  if (!show || !orderId) return null;
  if (loading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "modal show d-block",
    style: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "modal-dialog modal-lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
            className: "modal-title",
            children: ["Detalhes da Encomenda #", order.id]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            className: "btn-close",
            onClick: onClose
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("strong", {
              children: "Cliente:"
            }), " ", (_order$endereco = order.endereco) === null || _order$endereco === void 0 ? void 0 : (_order$endereco$clien = _order$endereco.cliente) === null || _order$endereco$clien === void 0 ? void 0 : _order$endereco$clien.nome]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("strong", {
              children: "Telefone:"
            }), " ", order.contacto_telemovel]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("strong", {
              children: "Status:"
            }), " ", (_order$status = order.status) === null || _order$status === void 0 ? void 0 : _order$status.designacao]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("strong", {
              children: "Data de Emiss\xE3o:"
            }), " ", new Date(order.data_de_emissao).toLocaleDateString()]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("strong", {
              children: "Endere\xE7o:"
            }), " ", (_order$endereco2 = order.endereco) === null || _order$endereco2 === void 0 ? void 0 : _order$endereco2.etiqueta, " (", (_order$endereco3 = order.endereco) === null || _order$endereco3 === void 0 ? void 0 : _order$endereco3.referencia_geografica, ")"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
            className: "mt-4",
            children: "Produtos:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "table-responsive",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: "table table-bordered",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "Produto"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "Quantidade"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "Pre\xE7o Unit\xE1rio"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "Total"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: produtos.map((p, index) => {
                  var _p$preco, _p$preco$produto, _p$preco2, _p$preco3;

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: (_p$preco = p.preco) === null || _p$preco === void 0 ? void 0 : (_p$preco$produto = _p$preco.produto) === null || _p$preco$produto === void 0 ? void 0 : _p$preco$produto.designacao
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: p.quantidade_encomendada
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: (_p$preco2 = p.preco) === null || _p$preco2 === void 0 ? void 0 : _p$preco2.preco_unitario
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: (p.quantidade_encomendada * parseFloat(((_p$preco3 = p.preco) === null || _p$preco3 === void 0 ? void 0 : _p$preco3.preco_unitario) || 0)).toFixed(2)
                    })]
                  }, index);
                })
              })]
            })
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ 2338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function OrderList({
  onView
}) {
  const {
    0: orders,
    1: setOrders
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  async function fetchOrders() {
    setLoading(true);
    const {
      data,
      error
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('Encomenda').select(`
        id,
        contacto_telemovel,
        data_de_emissao,
        status:status_da_encomenda_id(designacao),
        endereco: endereco_id (
          etiqueta,
          cliente:cliente_id (
            nome
          )
        )
      `);
    if (error) console.error('Erro ao buscar encomendas:', error);else setOrders(data);
    setLoading(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOrders();
  }, []);
  if (loading) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "table-responsive",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "table table-striped align-middle",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "ID"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "Cliente"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "Telefone"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "Data"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "Status"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "A\xE7\xF5es"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
        children: orders.map(order => {
          var _order$endereco, _order$endereco$clien, _order$status;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: order.id
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: ((_order$endereco = order.endereco) === null || _order$endereco === void 0 ? void 0 : (_order$endereco$clien = _order$endereco.cliente) === null || _order$endereco$clien === void 0 ? void 0 : _order$endereco$clien.nome) || '—'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: order.contacto_telemovel
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: new Date(order.data_de_emissao).toLocaleDateString()
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "badge bg-info",
                children: (_order$status = order.status) === null || _order$status === void 0 ? void 0 : _order$status.designacao
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: "btn btn-sm btn-primary",
                onClick: () => onView(order.id),
                children: "Ver Detalhes"
              })
            })]
          }, order.id);
        })
      })]
    })
  });
}

/***/ }),

/***/ 5308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Import supabase client
// Moved cloudinaryUp outside the component to avoid re-declaration and potential linting issues





async function cloudinaryUp(file, setErrorMessage) {
  // Pass setErrorMessage as a parameter
  const cloudName = "dbagu0ju8";
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("cloud_name", cloudName);
  formdata.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`, {
      method: 'POST',
      body: formdata
    });
    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${response.statusText}. Details: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    setErrorMessage(`Erro ao fazer upload da imagem: ${error.message}`); // Set error message in the component

    return null;
  }
}

function ProductForm({
  show,
  onClose,
  produtoEditado,
  onSave
}) {
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    produto_id: null,
    nome: '',
    preco: '',
    categoria: '',
    image: '',
    tipo_corte: '',
    quantidade_estoque: 0,
    activo: false // Changed default to false

  });
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isSaving,
    1: setIsSaving
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: saveSuccess,
    1: setSaveSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: imagePreview,
    1: setImagePreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: selectedFile,
    1: setSelectedFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State to hold the selected file object

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (show) {
      setErrorMessage('');
      setSaveSuccess(false);

      if (produtoEditado) {
        setFormData({
          produto_id: produtoEditado.produto_id,
          nome: produtoEditado.nome || '',
          preco: produtoEditado.preco || '',
          categoria: produtoEditado.categoria || '',
          image: produtoEditado.image || '',
          tipo_corte: produtoEditado.tipo_corte || '',
          quantidade_estoque: produtoEditado.quantidade_estoque || 0,
          activo: produtoEditado.activo !== undefined ? produtoEditado.activo : true
        });
        setImagePreview(produtoEditado.image || '');
      } else {
        setFormData({
          produto_id: null,
          nome: '',
          preco: '',
          categoria: '',
          image: '',
          tipo_corte: '',
          quantidade_estoque: 0,
          activo: false // Ensure new products default to false

        });
        setImagePreview('');
      }

      setSelectedFile(null); // Clear selected file on modal open/close

      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear file input
      }
    }
  }, [produtoEditado, show]);

  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: type === 'checkbox' ? checked : value
    }));
    setSaveSuccess(false);
    setErrorMessage('');
  };

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      setSelectedFile(null);
      setImagePreview('');
      setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        image: ''
      }));
      return;
    }

    if (!file.type.match('image.*')) {
      setErrorMessage('Por favor, selecione apenas arquivos de imagem.');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      setErrorMessage('A imagem selecionada é muito grande. O tamanho máximo é 5MB.');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = event => {
      setImagePreview(event.target.result);
    };

    reader.readAsDataURL(file);
    setErrorMessage('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');
    setIsSaving(true);
    const {
      nome,
      preco,
      categoria,
      tipo_corte,
      quantidade_estoque,
      activo
    } = formData; // Basic validation for required fields

    if (!nome.trim()) {
      setErrorMessage('O nome do produto é obrigatório.');
      setIsSaving(false);
      return;
    } // Validate preco


    const parsedPreco = parseFloat(preco);

    if (isNaN(parsedPreco) || parsedPreco < 0) {
      setErrorMessage('O preço deve ser um número positivo.');
      setIsSaving(false);
      return;
    } // Validate quantidade_estoque


    const parsedQuantidadeEstoque = parseInt(quantidade_estoque);

    if (isNaN(parsedQuantidadeEstoque) || parsedQuantidadeEstoque < 0) {
      setErrorMessage('A quantidade em estoque deve ser um número não negativo.');
      setIsSaving(false);
      return;
    } // For new products, ensure all required fields are present.
    // For existing products, we assume initial values are valid,
    // and only validate if they are changed or if they are explicitly required.
    // 'categoria' and 'tipo_corte' are text fields, if they are not required,
    // an empty string is acceptable.


    if (!categoria.trim()) {
      setErrorMessage('A categoria do produto é obrigatória.');
      setIsSaving(false);
      return;
    }

    let imageUrl = formData.image;

    if (selectedFile) {
      const uploadedUrl = await cloudinaryUp(selectedFile, setErrorMessage); // Pass setErrorMessage

      if (!uploadedUrl) {
        setIsSaving(false);
        return; // Stop if image upload failed (error message set by cloudinaryUp)
      }

      imageUrl = uploadedUrl;
    }

    const productData = {
      nome,
      preco: parseFloat(preco),
      categoria,
      image: imageUrl,
      tipo_corte,
      quantidade_estoque: parseInt(quantidade_estoque),
      activo
    };
    let error = null;

    if (produtoEditado) {
      // Update existing product
      const {
        error: updateError
      } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__/* .supabase.from */ .O.from('produtos').update(productData).eq('produto_id', formData.produto_id);
      error = updateError;
    } else {
      // Create new product
      const {
        error: insertError
      } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__/* .supabase.from */ .O.from('produtos').insert([productData]);
      error = insertError;
    }

    if (error) {
      console.error('Erro ao salvar produto:', error);
      setErrorMessage(`Erro ao salvar produto: ${error.message}`);
    } else {
      setSaveSuccess(true);
      onSave && onSave(); // Trigger refresh in parent

      setTimeout(() => {
        onClose();
      }, 1000);
    }

    setIsSaving(false);
  };

  const handleSelectImage = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      image: ''
    }));
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    show: show,
    onHide: onClose,
    size: "lg",
    centered: true,
    backdrop: "static",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
      closeButton: true,
      className: "bg-light border-bottom-0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, {
        className: "text-primary",
        children: produtoEditado ? 'Editar Produto' : 'Novo Produto'
      })
    }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "d-flex justify-content-center align-items-center py-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
          animation: "border",
          variant: "primary",
          role: "status",
          style: {
            width: '3rem',
            height: '3rem'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          className: "mt-3 text-muted",
          children: "Carregando..."
        })]
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
        className: "pt-0 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
          id: "productForm",
          onSubmit: handleSubmit,
          children: [saveSuccess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "alert alert-success mt-3 d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
              className: "bi bi-check-circle-fill me-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              children: ["Produto ", produtoEditado ? 'atualizado' : 'criado', " com sucesso!"]
            })]
          }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "alert alert-danger mt-3 d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
              className: "bi bi-exclamation-triangle-fill me-2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              children: errorMessage
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card border-0 shadow-sm rounded mt-3 mb-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "card-header bg-light py-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                className: "mb-0",
                children: "Informa\xE7\xF5es do Produto"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card-body pt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: ["Nome ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        className: "text-danger",
                        children: "*"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "text",
                      name: "nome",
                      value: formData.nome,
                      onChange: handleChange,
                      required: true,
                      className: "border-secondary-subtle",
                      placeholder: "Nome do produto"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: ["Pre\xE7o ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        className: "text-danger",
                        children: "*"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "number",
                      name: "preco",
                      value: formData.preco,
                      onChange: handleChange,
                      required: true,
                      min: "0",
                      step: "0.01",
                      className: "border-secondary-subtle",
                      placeholder: "0.00"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Text, {
                      className: "text-muted",
                      children: "Pre\xE7o unit\xE1rio do produto"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: ["Categoria ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        className: "text-danger",
                        children: "*"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "text",
                      name: "categoria",
                      value: formData.categoria,
                      onChange: handleChange,
                      required: true,
                      className: "border-secondary-subtle",
                      placeholder: "Ex: Frutas, Legumes, Carnes"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: "Tipo de Corte"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "text",
                      name: "tipo_corte",
                      value: formData.tipo_corte,
                      onChange: handleChange,
                      className: "border-secondary-subtle",
                      placeholder: "Ex: Cubos, Fatias, Inteiro"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: ["Quantidade em Estoque ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        className: "text-danger",
                        children: "*"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "number",
                      name: "quantidade_estoque",
                      value: formData.quantidade_estoque,
                      onChange: handleChange,
                      required: true,
                      min: "0",
                      className: "border-secondary-subtle",
                      placeholder: "0"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Text, {
                      className: "text-muted",
                      children: "Quantidade dispon\xEDvel no estoque"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 6,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: "Produto Ativo"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {
                      type: "switch",
                      id: "activo-switch",
                      name: "activo",
                      label: formData.activo ? 'Sim (Disponível para venda)' : 'Não (Indisponível para venda)',
                      checked: formData.activo,
                      onChange: handleChange,
                      className: "mt-2"
                    })]
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card border-0 shadow-sm rounded mb-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "card-header bg-light py-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                className: "mb-0",
                children: "Imagem do Produto"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "card-body pt-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: imagePreview ? 7 : 12,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                    className: "mb-3",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: "Upload de Imagem"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "d-flex gap-2 mb-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outline-primary",
                        onClick: handleSelectImage,
                        className: "d-flex align-items-center",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                          className: "bi bi-upload me-2"
                        }), "Selecionar Imagem"]
                      }), imagePreview && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outline-danger",
                        onClick: handleRemoveImage,
                        className: "d-flex align-items-center",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                          className: "bi bi-trash me-2"
                        }), "Remover"]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                      type: "file",
                      ref: fileInputRef,
                      onChange: handleFileChange,
                      accept: "image/*",
                      className: "d-none"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {
                      type: "text",
                      name: "image" // Changed from 'imagem' to 'image'
                      ,
                      value: formData.image,
                      onChange: handleChange,
                      placeholder: "URL da imagem (opcional)",
                      className: "border-secondary-subtle"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Text, {
                      className: "text-muted",
                      children: "Selecione uma imagem do seu dispositivo ou insira uma URL"
                    })]
                  })
                }), imagePreview && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                  md: 5,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-3",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                      className: "fw-medium",
                      children: "Preview"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "border rounded p-2 d-flex justify-content-center align-items-center bg-light",
                      style: {
                        height: '150px'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                        src: imagePreview,
                        alt: "Preview",
                        style: {
                          maxHeight: '140px',
                          maxWidth: '100%',
                          objectFit: 'contain'
                        },
                        onError: e => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150x150?text=Erro+na+imagem';
                        }
                      })
                    })]
                  })
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {
        className: "border-top-0 pt-0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "light",
          onClick: onClose,
          disabled: isSaving,
          className: "border",
          children: "Cancelar"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          type: "submit",
          form: "productForm",
          disabled: isLoading || isSaving,
          className: "d-flex align-items-center",
          children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
              size: "sm",
              animation: "border",
              className: "me-2"
            }), produtoEditado ? 'Atualizando...' : 'Salvando...']
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
              className: "bi bi-check-lg me-2"
            }), produtoEditado ? 'Atualizar' : 'Salvar']
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 1387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _common_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // Import Form, Row, Col




const ITEMS_PER_PAGE = 10; // Define how many items per page
// Debounce function to limit API calls on search input

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

function ProductList({
  onEdit,
  onProductSavedOrDeleted
}) {
  const {
    0: produtos,
    1: setProdutos
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: totalCount,
    1: setTotalCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // New state for category filter

  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // New state for unique categories

  const fetchProdutos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setLoading(true);
    setError(null);
    const from = (currentPage - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    let query = _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('produtos').select(`
        produto_id,
        nome,
        preco,
        categoria,
        image,
        tipo_corte,
        quantidade_estoque,
        activo
      `, {
      count: 'exact'
    });

    if (searchTerm) {
      query = query.or(`nome.ilike.%${searchTerm}%,categoria.ilike.%${searchTerm}%`);
    }

    if (selectedCategory) {
      query = query.eq('categoria', selectedCategory);
    }

    const {
      data,
      error,
      count
    } = await query.order('produto_id', {
      ascending: true
    }).range(from, to);

    if (error) {
      console.error('Erro ao buscar produtos:', error);
      setError('Erro ao carregar produtos.');
    } else {
      setProdutos(data);
      setTotalCount(count);
    }

    setLoading(false);
  }, [currentPage, searchTerm, selectedCategory]);
  const fetchCategories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const {
      data,
      error
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('produtos').select('categoria', {
      distinct: true
    }) // Corrected distinct usage
    .not('categoria', 'is', null); // Still filter out null categories

    if (error) {
      console.error('Erro ao buscar categorias:', error);
    } else {
      // Ensure categories are unique and sorted, and add an empty option
      const uniqueCategories = [...new Set(data.map(item => item.categoria))].sort();
      setCategories(['', ...uniqueCategories]);
    }
  }, []);

  async function handleDelete(produto_id) {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
      return;
    }

    setLoading(true);
    const {
      error
    } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_1__/* .supabase.from */ .O.from('produtos').delete().eq('produto_id', produto_id);

    if (error) {
      console.error('Erro ao excluir produto:', error);
      setError('Erro ao excluir produto.');
    } else {
      console.log('Produto excluído com sucesso:', produto_id);

      if (produtos.length === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      } else {
        fetchProdutos();
      }

      onProductSavedOrDeleted();
    }

    setLoading(false);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProdutos();
  }, [fetchProdutos, onProductSavedOrDeleted]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchCategories();
  }, [fetchCategories]);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = pageNumber => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const debouncedSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(debounce(value => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 300), []);

  const handleSearchChange = e => {
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on new category filter
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "table-responsive",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
      className: "mb-3 align-items-end",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
        md: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
            className: "fw-medium",
            children: "Pesquisar Produto"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {
            type: "text",
            placeholder: "Nome ou Categoria...",
            onChange: handleSearchChange,
            value: searchTerm
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
        md: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
            className: "fw-medium",
            children: "Filtrar por Categoria"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Select, {
            value: selectedCategory,
            onChange: handleCategoryChange,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
              value: "",
              children: "Todas as Categorias"
            }), categories.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
              value: category,
              children: category
            }, category))]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
        md: 3,
        className: "text-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "mb-0 fw-medium",
          children: ["Total de Produtos: ", totalCount]
        }), " "]
      })]
    }), loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_common_Loader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "alert alert-danger",
      children: error
    }) : produtos.length === 0 && totalCount === 0 && !searchTerm && !selectedCategory ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "alert alert-info",
      children: "Nenhum produto encontrado."
    }) : produtos.length === 0 && (searchTerm || selectedCategory) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "alert alert-info",
      children: "Nenhum produto encontrado para os filtros aplicados."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: "table table-striped",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "ID"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Nome"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Pre\xE7o"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Categoria"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Tipo de Corte"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Estoque"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "Ativo"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "A\xE7\xF5es"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tbody", {
          children: produtos.map(produto => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.produto_id
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.nome
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.preco ? `Kz ${parseFloat(produto.preco).toFixed(2)}` : 'N/A'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.categoria || 'N/A'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.tipo_corte || 'N/A'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.quantidade_estoque
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: produto.activo ? 'Sim' : 'Não'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "btn-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  className: "btn btn-sm btn-primary",
                  onClick: () => onEdit(produto),
                  children: "Editar"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  className: "btn btn-sm btn-danger ms-1",
                  onClick: () => handleDelete(produto.produto_id),
                  children: "Excluir"
                })]
              })
            })]
          }, produto.produto_id))
        })]
      }), totalPages > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("nav", {
        "aria-label": "Product pagination",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
          className: "pagination justify-content-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            className: `page-item ${currentPage === 1 ? 'disabled' : ''}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              className: "page-link",
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1,
              children: "Anterior"
            })
          }), [...Array(totalPages)].map((_, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            className: `page-item ${currentPage === index + 1 ? 'active' : ''}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              className: "page-link",
              onClick: () => handlePageChange(index + 1),
              children: index + 1
            })
          }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            className: `page-item ${currentPage === totalPages ? 'disabled' : ''}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              className: "page-link",
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage === totalPages,
              children: "Pr\xF3ximo"
            })
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ 7066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);
// lib/supabaseClient.js

const supabaseUrl = "https://tmxloojyhptewicelujm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteGxvb2p5aHB0ZXdpY2VsdWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NjgyMDYsImV4cCI6MjAzNjQ0NDIwNn0.9mYoFRr1Mlo02DD2haZ1jnKXA1_XCzkh9pMfMa2xVf0";
const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);

/***/ })

};
;