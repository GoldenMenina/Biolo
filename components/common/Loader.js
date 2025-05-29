export default function Loader() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          {/* Removed "Carregando..." text as requested */}
        </div>
      </div>
    );
  }
