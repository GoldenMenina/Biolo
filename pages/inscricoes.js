import Head from "next/head";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { getDecryptedCookie, setEncryptedCookie } from "../lib/session";
import { Form, Button } from "react-bootstrap";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import "react-toastify/dist/ReactToastify.css";
import makeid from "../lib/random";
import Card from "../lib/Card";

export default function GestaoUsuarios() {
  const [usuarios, setusuarios] = useState();
  const [usuario, setusuario] = useState();
  const [filter, setfilter] = useState(false);

  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [numberincritos, setnumberincritos] = useState();

  const [ShowMessageModal, setShowMessageModal] = useState(false);
  const [loading, setloading] = useState(false);
  const [membros, setmembros] = useState([]);
  const [Info, setinfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [usersslected, setusersslected] = useState([]);
  const [naopago, setnaopago] = useState(false);

  var toaststate;
  var pagesarray = [];
  const router = useRouter();

  const Getusuarios = async () => {
    var filter = Info;

    const res = await fetch("/api/usuarios/allusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: currentPage,
        info: filter,
      }),
    });
    const data = await res.json();
    setnumberincritos(data.inscritos);
    setmembros(data.usuarios);
    setTotalPages(data.pages);
  };
  function generateRandom4DigitNumber() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    return randomNumber;
  }

  const sendmessage = async () => {
    toaststate = toast.loading("Please wait...", { closeOnClick: true });
  
    var filter = Info;
  
    const res = await fetch("/api/usuarios/usersmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: filter,
      }),
    });
  
    const data = await res.json();
    const selectedusers = [{contacto: 942218877}, {contacto: 929618206}];
    var contactos = [];
    const responses = []; // Array to store responses
  
    for (let index = 0; index < selectedusers.length; index++) {
      contactos = [];
      contactos.push(selectedusers[index].contacto);
      const resmessage = await fetch("https://app.smshub.ao/api/sendsms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken: "YOUR_ACCESS_TOKEN", // Replace with your access token
        },
        body: JSON.stringify({
          auth_id: "122792814220057352",
          secret_key:
            "VB9ErlsiFQGfEOpME4HEb6bDXl2LcbKHLAGQbEVjHTAO4P1whIvjqCwg5BT1Fh0N0cSLCE48Hh8YWe2pVWrkcXZUkN0QrMnkJC9o",
         contactNo: contactos,
          from: "ANJE-ANGOLA",
          message: message,
        }),
      });
  
      const resp = await resmessage.json();
      responses.push(resp); // Store response in array
    }
  
    toast.update(toaststate, {
      render: "Message sent successfully",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
  
    console.log(responses); // Do whatever you need with the responses
  };
  
  const getsesh = async () => {
    const response = await getDecryptedCookie("authsesh");
    if (response) {
      if (response.tipo == "administrador") {
        setusuario(response);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  };

  useEffect(() => {
    setusuarios(null);
    Getusuarios();
  }, [page, Info, currentPage]);

  useEffect(() => {
    if (!usuario) {
      getsesh();
    }
  }, []);

  const Prev = () => {
    if (page == 1) {
      return false;
    }
    setpage(Number(page) - 1);
  };

  const Next = () => {
    if (page == pages) {
      return false;
    }
    setpage(Number(page) + 1);
  };

  const EliminarUsuario = async (membro) => {
    try {
      toaststate = toast.loading("aguarde...", { closeOnClick: true });

      const res = await fetch("/api/usuarios/eliminate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: membro._id,
        }),
      });
      const data = await res.json();
      Getusuarios();
      toast.update(toaststate, {
        render: "eliminado com sucesso",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      const data = await res.json();
      toast.update(toaststate, {
        render: "houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1000,
      });
    }
    setloading(false);

    $("#eliminar").modal("hide");
  };
  const ReprovarUsuario = async (membro) => {
    try {
      toaststate = toast.loading("aguarde...", { closeOnClick: true });

      const res = await fetch("/api/usuarios/reprovar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(membro),
      });
      const data = await res.json();
      Getusuarios();
      toast.update(toaststate, {
        render: "reprovado com sucesso",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      const data = await res.json();
      toast.update(toaststate, {
        render: "houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1000,
      });
    }
    setloading(false);

    $("#eliminar").modal("hide");
  };
  const Aprovarusario = async (membro) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);
    const random4DigitNumber = generateRandom4DigitNumber();

    const SmSmessage = `${membro.nome}  Seja bem-vindo(a) a ANJE-Angola, é uma honra tê-lo(a) como membro ANJE!\n\nA sua conta ANJE está activa, através do seu número de telefone registado e este código: ${random4DigitNumber}, tens acesso a “1ª Conferência Anual de Jovens Mulheres Empresarias de Angola.” Dia 16 de Março no Centro de Conferência de Belas (CCB).\n\nAcesse o portal em: https://portal-eta-eight.vercel.app/login\n\nANJE Angola - “Uma Angola feita por todos, e melhor para todos“`;

    try {
      const res = await fetch("/api/usuarios/aprovarcomrovativo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(membro),
      });
      Getusuarios();

      const contactsend = [membro.contacto];
      const resmessage = await fetch("https://app.smshub.ao/api/sendsms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken:
            "4xPR7x9Sn1njzYIMka7GD0vJKG6vP5Cm6liHjRTqR3CoDiPzYpr2kRg0Jj3twj7SfklkgZikH08oUL3WjoXjlCkNYsFoBwLAduO76g6Z5iU9loPebTNXVdkz7UQTEoT11efTnnoNpwVIzips7etUjzMganD9Vte35KjopgeqChAWxundN74y8rHAAXiet6Eu5DM04qGVuCzMpwNra0kvRKT27eoS6B4xRFkM5Ai8mlaP81Wfj7dy5X1HTsY6qFR",
        },
        body: JSON.stringify({
          auth_id: "122792814220057352",
          secret_key:
            "VB9ErlsiFQGfEOpME4HEb6bDXl2LcbKHLAGQbEVjHTAO4P1whIvjqCwg5BT1Fh0N0cSLCE48Hh8YWe2pVWrkcXZUkN0QrMnkJC9o",
          contactNo: contactsend,
          from: "ANJE-ANGOLA",
          message: SmSmessage,
        }),
      });

      const ressss = await resmessage.json();
      console.log(ressss);

      setloading(false);

      toast.update(toaststate, {
        render: "aprovado",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    } catch (err) {
      Getusuarios();
      toast.update(toaststate, {
        render: "houve um erro",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
      setloading(false);

      $("#novo").modal("hide");
    }

    toast.update(toaststate, {
      render: "atualizado com successo",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1000,
    });
    setloading(false);
  };

  const enviarNaopagomensagem = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    var filter = Info;

    const res = await fetch("/api/usuarios/usersmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: filter,
      }),
    });
    const data = await res.json();
    const selectedusers = data.users;
    var contactos = [];
    for (let index = 0; index < selectedusers.length; index++) {
      contactos.push(selectedusers[index].contacto);
    }

    console.log(contactos);
    return;
    const SmSmessage = `Saudações caro membro!\n\nA sua conta ANJE está inactiva, por este motivo a nossa organização não consegue aprovar a sua Candidatura para o evento das mulheres empresárias , para activar entra em: https://portal-eta-eight.vercel.app/login, em pagamentos poderá pagar a sua quota escolhendo o pacote que mais se enquadra com a sua disponibilidade financeira, eis os pacotes abaixo:\n\nDiamante - 35.000,00kz\nPlatina - 20.000,00kz\nOuro - 10.000,00kz\nPrata - 5.000,00kz\nBronze - 1.000,00kz\n\nEsperamos tê-lo(a) na “1ª Conferência Anual de Jovens Mulheres Empresarias de Angola.” Dia 16 de Março no Centro de Conferência de Belas (CCB) pelas às 08H00.\n\nIBAN: AO06006600000676366110127\nNOME: ANJE ANGOLA ASS N P C J EMPRESARIOS.\n\nComprovativos e suporte técnico pelo: 925696426\n\nANJE Angola – “Uma Angola feita por todos, e melhor para todos”`;
    const resmessage = await fetch("https://app.smshub.ao/api/sendsms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken:
          "4xPR7x9Sn1njzYIMka7GD0vJKG6vP5Cm6liHjRTqR3CoDiPzYpr2kRg0Jj3twj7SfklkgZikH08oUL3WjoXjlCkNYsFoBwLAduO76g6Z5iU9loPebTNXVdkz7UQTEoT11efTnnoNpwVIzips7etUjzMganD9Vte35KjopgeqChAWxundN74y8rHAAXiet6Eu5DM04qGVuCzMpwNra0kvRKT27eoS6B4xRFkM5Ai8mlaP81Wfj7dy5X1HTsY6qFR",
      },
      body: JSON.stringify({
        auth_id: "122792814220057352",
        secret_key:
          "VB9ErlsiFQGfEOpME4HEb6bDXl2LcbKHLAGQbEVjHTAO4P1whIvjqCwg5BT1Fh0N0cSLCE48Hh8YWe2pVWrkcXZUkN0QrMnkJC9o",
        contactNo: contactos,
        from: "ANJE-ANGOLA",
        message: SmSmessage,
      }),
    });

    const resp = await resmessage.json();
    console.log(resp);
    toast.update(toaststate, {
      render: "enviado com sucesso",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
  };

  const [message, setMessage] = useState("");

  const handleAddEmoji = (emoji) => {
    setMessage(message + emoji.native);
  };

  const handleAddNewParagraph = () => {
    setMessage(message + "\n\n");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const enviarMensagem = async () => {
    const response = await getDecryptedCookie("authsesh");
    if (response) {
      if (response.tipo == "administrador") {
        setusuario(response);
      } else {
        router.replace("/");
      }
    } else {
      router.replace("/");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>ANJE - Gestão do Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            {/* <h3 className="mt-3 mb-3">Inscrições de novo membros</h3> */}
            <div className="row mb-3">
              <div className="col-md-12 mt-4">
                <button
                  onClick={(e) => {
                    setinfo({});
                    setnaopago(false);
                  }}
                  className="btn btn-sm btn-info mr-1"
                >
                  <i className="fa fa-users"></i> Todos
                </button>
                <button
                  onClick={(e) => {
                    setinfo({
                      estado: true,
                    });
                    setnaopago(false);
                  }}
                  className="btn btn-sm btn-success mr-1"
                >
                  <i className="fa fa-coins"></i> aprovados
                </button>
                <button
                  onClick={(e) => {
                    setinfo({
                      comprovativo: {
                        $regex: ".*" + "https://res.cloudinary.com" + ".*",
                        $options: "i",
                      },
                      $or: [
                        { pago: { $exists: false } },
                        { pago: { $eq: false } },
                      ],
                    });
                    setnaopago(false);
                  }}
                  className="btn btn-sm btn-warning mr-1"
                >
                  <i className="fa fa-coins"></i> pendentes
                </button>
                <button
                  onClick={(e) => {
                    setinfo({
                      $or: [{ pago: { $exists: false } }, { pago: false }],
                    });

                    setnaopago(true);
                  }}
                  className="btn btn-sm btn-danger mr-1"
                >
                  <i className="fa fa-coins"></i>não aprovados
                </button>
                <button
                  onClick={() => {
                    setfilter(!filter);
                    setnaopago(false);
                  }}
                  className="btn btn-sm btn-primary"
                >
                  <i className="fa fa-filter"></i> filtros
                </button>{" "}
                {naopago ? (
                  <button
                    onClick={(e) => {
                      enviarNaopagomensagem();
                    }}
                    className="btn btn-sm btn-danger mr-1"
                  >
                    <i className="fa fa-envelope"></i> Enviar Mensagem
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      setShowMessageModal(true);
                    }}
                    className="btn btn-sm btn-warning mr-1"
                  >
                    <i className="fa fa-envelope"></i> Enviar Mensagem
                  </button>
                )}
                <span className="mr-3">
                  {" "}
                  <strong>Nº:{" " + numberincritos}</strong>{" "}
                </span>
              </div>
            </div>
          </div>

          {filter && (
            <>
              {" "}
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    setinfo({
                      email: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  placeholder="Nome"
                  onChange={(e) => {
                    setinfo({
                      nome: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setinfo({
                      contacto: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                    });
                  }}
                  placeholder="Telefone"
                />
              </div>
              <div className="col-md-3 mb-3 mt-3">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setinfo({
                      classe: {
                        $regex: ".*" + e.target.value + ".*",
                        $options: "i",
                      },
                      pago: true,
                    });
                  }}
                  placeholder="Email"
                >
                  <option value="">Classe</option>

                  <option value="Diamante">Diamante - 35.000,00 kz</option>
                  <option value="Platina">Platina - 20.000,00 kz</option>
                  <option value="Ouro">Ouro - 10.000,00 kz</option>
                  <option value="Prata">Prata - 5.000,00 kz</option>
                  <option value="Bronze">Bronze - 1.000,00 kz</option>
                </select>
              </div>
            </>
          )}

          {membros &&
            membros.map((membro) => (
              <div className="col-md-4">
                <Card
                  //   key={i}
                  class={
                    membro.comprovativo
                      ? membro.pago
                        ? "callout-success"
                        : "callout-info"
                      : "callout-danger"
                  }
                  membro={membro}
                  onClick={(cliente) => {
                    setclienteinfo(cliente);
                    setcriarproposta(false);
                  }}
                  onApprove={() => {
                    Aprovarusario(membro);
                  }}
                  onDelete={() => {
                    EliminarUsuario(membro);
                  }}
                  onReject={() => {
                    ReprovarUsuario(membro);
                  }}
                  loading={loading}
                />
              </div>
            ))}

          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-body table-responsive p-0"></div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li
                    className={`page-item  ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                      }}
                    >
                      Anterior
                    </a>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (n) => (
                      <li
                        key={n}
                        className={`page-item  ${
                          currentPage === n ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() => {
                            setCurrentPage(n);
                          }}
                          href="#"
                        >
                          {n}
                        </a>
                      </li>
                    )
                  )}

                  <li
                    className={`page-item  ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        );
                      }}
                    >
                      Proximo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal ${ShowMessageModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: ShowMessageModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enviar Mensagem</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowMessageModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h3>
                  <p>Enviar para {numberincritos} pessoas</p>
                </h3>
                <div className="MT-5">
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Type your message here..."
                      value={message}
                      onChange={handleChange}
                    />

                    {loading ? (
                      <button type="button" className="btn btn-danger">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Aguarde...</span>
                        </div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          sendmessage();
                        }}
                      >
                        Enviar
                      </button>
                    )}
                    {/* <Picker  data={data} onEmojiSelect={handleAddEmoji} /> */}
                  </Form.Group>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setShowMessageModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
