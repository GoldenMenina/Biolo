import { useState } from 'react';
import ProductList from '../../components/products/ProductList';
import ProductForm from '../../components/products/ProductForm';
import ClientList from '../../components/clients/ClientList';
import ClientForm from '../../components/clients/ClientForm';
import OrderList from '../../components/orders/OrderList';
import OrderDetailsModal from '../../components/orders/OrderDetailsModal';
import ProductPriceForm from '../../components/products/ProductPriceForm';
import GamaComercialManagement from '../../components/products/Gamacomercial';

export default function AdminDashboard() {
  const [section, setSection] = useState('products');

  // Product Modal
  const [showProductForm, setShowProductForm] = useState(false);
  const [produtoEditado, setProdutoEditado] = useState(null);

  // Client Modal
  const [showClientForm, setShowClientForm] = useState(false);
  const [clienteEditado, setClienteEditado] = useState(null);

  // Order Modal
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [showPriceForm, setShowPriceForm] = useState(false);
const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#adminNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav me-auto">
  <li className="nav-item">
    <button
      className={`nav-link btn btn-link text-white ${section === 'products' ? 'fw-bold' : ''}`}
      onClick={() => setSection('products')}
    >
      Produtos
    </button>
  </li>
  <li className="nav-item">
    <button
      className={`nav-link btn btn-link text-white ${section === 'clients' ? 'fw-bold' : ''}`}
      onClick={() => setSection('clients')}
    >
      Clientes
    </button>
  </li>
  <li className="nav-item">
    <button
      className={`nav-link btn btn-link text-white ${section === 'orders' ? 'fw-bold' : ''}`}
      onClick={() => setSection('orders')}
    >
      Encomendas
    </button>
  </li>
  <li className="nav-item">
    <button
      className={`nav-link btn btn-link text-white ${section === 'gama-comercial' ? 'fw-bold' : ''}`}
      onClick={() => setSection('gama-comercial')}
    >
      Gamas Comerciais
    </button>
  </li>
</ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-4">
      {section === 'products' && (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>Gestão de Produtos</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          setProdutoEditado(null);
          setShowProductForm(true);
        }}
      >
        Novo Produto
      </button>
    </div>
    <ProductList 
      onEdit={(produto) => {
        setProdutoEditado(produto);
        setShowProductForm(true);
      }}
      onProductSavedOrDeleted={() => {
        // This prop will trigger a re-fetch in ProductList when a product is saved or deleted
        // No direct action needed here, ProductList's useEffect handles it.
      }}
    />
    <ProductForm
      show={showProductForm}
      onClose={() => setShowProductForm(false)}
      produtoEditado={produtoEditado}
      onSave={() => {
        // When a product is saved, we want to ensure the list refreshes.
        // ProductList's useEffect listens to onProductSavedOrDeleted, so we can just close the form.
        // The ProductList component will handle its own refresh.
      }}
    />
    {/* Removed ProductPriceForm as it's not directly related to 'produtos' table */}
  </div>
)}


{/* Removed GamaComercialManagement section as it's not directly related to 'produtos' table */}
{/* {section === 'gama-comercial' && (
  <div>
    <h2 className="mb-3">Gestão de Gamas Comerciais</h2>
    <GamaComercialManagement />
  </div>
)} */}

        {section === 'clients' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Gestão de Clientes</h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setClienteEditado(null);
                  setShowClientForm(true);
                }}
              >
                Novo Cliente
              </button>
            </div>
            <ClientList onEdit={(cliente) => {
              setClienteEditado(cliente);
              setShowClientForm(true);
            }} />
            <ClientForm
              show={showClientForm}
              onClose={() => setShowClientForm(false)}
              clienteEditado={clienteEditado}
              onSave={() => {}}
            />
          </div>
        )}

        {section === 'orders' && (
          <div>
            <h2 className="mb-3">Gestão de Encomendas</h2>
            <OrderList onView={(orderId) => setSelectedOrderId(orderId)} />
            <OrderDetailsModal
              show={!!selectedOrderId}
              orderId={selectedOrderId}
              onClose={() => setSelectedOrderId(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
