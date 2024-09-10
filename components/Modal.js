import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-message">
          Email adicionado para receber newsletter
        </div>
        <button onClick={onClose} className="modal-close-button">
          Fechar
        </button>
      </div>
      <style jsx>{`
        .modal-overlay {
        z-index:9999
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background-color: #FFFFFF;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          width: 100%;
        }
        .modal-message {
          color: #24712F;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .modal-close-button {
          background-color: #24712F;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .modal-close-button:hover {
          background-color: #1e5f26;
        }
      `}</style>
    </div>
  );
};

export default Modal;