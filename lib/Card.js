import { faTruckFieldUn } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Card(props) {
  const { membro, onApprove, onReject, loading, onDelete } = props;
  const [showModal, setShowModal] = useState(false);
  const [showModalEliminar, setshowModalEliminar] = useState(false);

  const [showComprovativoModal, setShowComprovativoModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openComprovativoModal = () => {
    const lastThreeCharacters = membro.comprovativo.slice(-4);

    console.log(lastThreeCharacters);
    setShowComprovativoModal(true);
  };

  const closeComprovativoModal = () => {
    setShowComprovativoModal(false);
  };

  const eliminate = () => {
    onDelete(true);
  };
  const reprovar = () => {
    onReject(true);
  };

  const aprovar = () => {
    onApprove(true);
  };

  return (
    <>
      <div
        className={`callout  ${props.class}`}
        style={{ marginBottom: "5px", color: "#fff" }}
      >
        <h5>
          <i
            className={
              membro.comprovativo ? "fa fa-user text-info" : " fa fa-user"
            }
          ></i>{" "}
          {membro.comprovativo ? (
            <i className="fa fa-coins text-warning"></i>
          ) : (
            " "
          )}{" "}
          {membro.nome}{" "}
          {membro.ultimoNome ? membro.ultimoNome : membro.ultimonome}
        </h5>

        <div>
          {loading ? (
            <>
              {" "}
              <button className="btn btn-sm btn-success mr-3 disabled">
                {" "}
                -<i className="fa fa-check"></i> Aprovar
              </button>
              <button className="btn btn-sm btn-warning disabled">
                {" "}
                <i className="fa fa-times"></i> reprovar
              </button>
            </>
          ) : (
            <>
              {" "}
              <button className="btn btn-sm btn-info" onClick={openModal}>
                {" "}
                <i className="fa fa-eye"></i> ver
              </button>
              {/* Bootstrap Modal */}
              <div
                className={`modal ${showModal ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: showModal ? "block" : "none" }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        Member Information - {membro.nome}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* Member information here */}
                      <div className="row">
                        <div className="col-8">
                          {" "}
                          <p>
                            <strong>Classe:</strong> {membro.classe}
                          </p>
                          <p>
                            <strong>Data de Nascimento:</strong>{" "}
                            {membro.dataNascimento}
                          </p>
                          <p>
                            <strong>Motivo:</strong> {membro.motivacao}
                          </p>
                          <p>
                            <strong>Contacto:</strong> {membro.contacto}
                          </p>
                          <p>
                            <strong>Email:</strong> {membro.email}
                          </p>
                          <p>
                            Localização:{" "}
                            {membro.provincia + ", " + membro.municipio}
                          </p>
                        </div>{" "}
                        <div className="col-4">
                          <img
                            className="profile-user-img img-fluid img-circle"
                            src={
                              membro && membro.avatar
                                ? membro.avatar
                                : "https://picsum.photos/200/300"
                            }
                            alt="User profile picture"
                            style={{
                              objectFit: "cover",
                              width: "100px", // Defina a largura desejada
                              height: "100px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          reprovar();
                          setShowModal(false);
                        }}
                      >
                        Reprovar
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          aprovar();
                          setShowModal(false);
                        }}
                      >
                        Aprovar
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setshowModalEliminar(true)}
                      >
                        Eliminar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={openComprovativoModal}
                      >
                        Comprovativo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Bootstrap Modal */}
              {/* Eliminar Modal */}
              <div
                className={`modal ${showModalEliminar ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: showModalEliminar ? "block" : "none" }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{membro.nome}</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setshowModalEliminar(false)}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h3>
                        <p>
                          {" "}
                          <span className="text-danger">Eliminar</span>{" "}
                          {membro && membro.nome} ?
                        </p>
                      </h3>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>

                      {loading ? (
                        <button type="button" className="btn btn-danger">
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Aguarde...</span>
                          </div>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            eliminate();
                            setShowModal(false);
                            setshowModalEliminar(false);
                          }}
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Eliminar Modal */}
            </>
          )}
        </div>
      </div>

      {/* Comprovativo Modal */}
      <div
        className={`modal ${showComprovativoModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showComprovativoModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Comprovativo - {membro.nome}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeComprovativoModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Iframe for comprovativo */}

              <iframe
                title="Comprovativo"
                src={membro.comprovativo}
                width="100%"
                height="500px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End of Comprovativo Modal */}
    </>
  );
}
