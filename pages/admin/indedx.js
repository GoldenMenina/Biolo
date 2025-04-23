import { useState } from 'react';
import ProductList from '../../components/products/ProductList';
import ProductForm from '../../components/products/ProductForm';
import ClientList from '../../components/clients/ClientList';
import ClientForm from '../../components/clients/ClientForm';
import OrderList from '../../components/orders/OrderList';
import OrderDetailsModal from '../../components/orders/OrderDetailsModal';

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
            <ProductList onEdit={(produto) => {
              setProdutoEditado(produto);
              setShowProductForm(true);
            }} />
            <ProductForm
              show={showProductForm}
              onClose={() => setShowProductForm(false)}
              produtoEditado={produtoEditado}
              onSave={() => {}}
            />
          </div>
        )}

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
