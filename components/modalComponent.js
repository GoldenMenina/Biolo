import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const InactiveAccountModal = () => {
  const router = useRouter();

  return (
    <>
      <div
        className="modal fade show"
        id="inactiveAccountModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="inactiveAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content dark-mode">
            <div className="modal-header">
              <h5 className="modal-title" id="inactiveAccountModalLabel">
                <FontAwesomeIcon icon="user" /> Conta Inativa
              </h5>
            </div>
            <div className="modal-body">
              <p>
                Sua conta está atualmente inativa. Carregue o comprovativo do
                mês corrente ou entre em contato com o suporte para assistência.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  router.replace("/perfil");
                }}
              >
                Ir ao perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InactiveAccountModal;

<style jsx>{`
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
`}</style>;
