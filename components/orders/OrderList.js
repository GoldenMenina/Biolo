import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';

export default function OrderList({ onView }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchOrders() {
    setLoading(true);
    const { data, error } = await supabase
      .from('Encomenda')
      .select(`
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

    if (error) console.error('Erro ao buscar encomendas:', error);
    else setOrders(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.endereco?.cliente?.nome || '—'}</td>
              <td>{order.contacto_telemovel}</td>
              <td>{new Date(order.data_de_emissao).toLocaleDateString()}</td>
              <td><span className="badge bg-info">{order.status?.designacao}</span></td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => onView(order.id)}>
                  Ver Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
