import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';

export default function ClientForm({ show, onClose, clienteEditado, onSave }) {
  const [form, setForm] = useState({
    nome: '',
    telemovel: '',
    segmento_de_cliente_id: ''
  });
  const [segmentos, setSegmentos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (clienteEditado) {
      setForm(clienteEditado);
    } else {
      setForm({ nome: '', telemovel: '', segmento_de_cliente_id: '' });
    }
  }, [clienteEditado]);

  useEffect(() => {
    async function fetchSegmentos() {
      const { data, error } = await supabase.from('SegmentoDeClientes').select('*');
      if (!error) setSegmentos(data);
    }
    fetchSegmentos();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (clienteEditado) {
        const { error } = await supabase
          .from('Cliente')
          .update({
            nome: form.nome,
            telemovel: form.telemovel,
            segmento_de_cliente_id: form.segmento_de_cliente_id
          })
          .eq('id', form.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('Cliente')
          .insert([form]);
        if (error) throw error;
      }

      onSave();
      onClose();
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar cliente.');
    }

    setLoading(false);
  }

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{clienteEditado ? 'Editar Cliente' : 'Novo Cliente'}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {loading ? <Loader /> : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nome</label>
                  <input type="text" name="nome" className="form-control" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefone</label>
                  <input type="text" name="telemovel" className="form-control" value={form.telemovel} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Segmento de Cliente</label>
                  <select name="segmento_de_cliente_id" className="form-select" value={form.segmento_de_cliente_id} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    {segmentos.map(seg => <option key={seg.id} value={seg.id}>{seg.designacao}</option>)}
                  </select>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-success me-2">Salvar</button>
                  <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
