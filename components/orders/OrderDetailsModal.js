import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';

export default function OrderDetailsModal({ show, orderId, onClose }) {
  const [order, setOrder] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show && orderId) {
      fetchOrderDetails(orderId);
    }
  }, [show, orderId]);

  async function fetchOrderDetails(id) {
    setLoading(true);

    const { data: encomenda } = await supabase
      .from('Encomenda')
      .select(`
        *,
        status:status_da_encomenda_id(designacao),
        endereco: endereco_id (
          etiqueta,
          referencia_geografica,
          cliente:cliente_id ( nome )
        )
      `)
      .eq('id', id)
      .single();

    const { data: itens } = await supabase
      .from('ProdutoEncomendado')
      .select(`
        quantidade_encomendada,
        preco:preco_de_produto_id (
          preco_unitario,
          produto:produto_id (
            designacao
          )
        )
      `)
      .eq('encomenda_id', id);

    setOrder(encomenda);
    setProdutos(itens || []);
    setLoading(false);
  }

  if (!show || !orderId) return null;
  if (loading) return <Loader />;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalhes da Encomenda #{order.id}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Cliente:</strong> {order.endereco?.cliente?.nome}</p>
            <p><strong>Telefone:</strong> {order.contacto_telemovel}</p>
            <p><strong>Status:</strong> {order.status?.designacao}</p>
            <p><strong>Data de Emissão:</strong> {new Date(order.data_de_emissao).toLocaleDateString()}</p>
            <p><strong>Endereço:</strong> {order.endereco?.etiqueta} ({order.endereco?.referencia_geografica})</p>

            <h6 className="mt-4">Produtos:</h6>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((p, index) => (
                    <tr key={index}>
                      <td>{p.preco?.produto?.designacao}</td>
                      <td>{p.quantidade_encomendada}</td>
                      <td>{p.preco?.preco_unitario}</td>
                      <td>{(p.quantidade_encomendada * parseFloat(p.preco?.preco_unitario || 0)).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
