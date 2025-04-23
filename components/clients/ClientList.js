import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';

export default function ClientList({ onEdit }) {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  async function fetchClientes() {
    setLoading(true);
    const { data, error } = await supabase
      .from('Cliente')
      .select(`
        id,
        nome,
        telemovel,
        segmento:segmento_de_cliente_id(designacao)
      `);

    if (error) console.error('Erro ao carregar clientes:', error);
    else setClientes(data);

    setLoading(false);
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  async function deletarCliente(id) {
    if (!confirm('Deseja eliminar este cliente?')) return;
    const { error } = await supabase.from('Cliente').delete().eq('id', id);
    if (error) console.error('Erro ao deletar:', error);
    else fetchClientes();
  }

  const filtered = clientes.filter(c =>
    c.nome.toLowerCase().includes(search.toLowerCase()) ||
    c.telemovel.includes(search)
  );

  if (loading) return <Loader />;

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar por nome ou telefone"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Segmento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.telemovel}</td>
                <td>{cliente.segmento?.designacao || '—'}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(cliente)}>Editar</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deletarCliente(cliente.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
