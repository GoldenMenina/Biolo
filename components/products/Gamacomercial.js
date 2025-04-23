import { useState, useEffect } from 'react';
import { Card, Button, Form, Table } from 'react-bootstrap';

export default function GamaComercialManagement() {
  const [gamas, setGamas] = useState([]);
  const [novaGama, setNovaGama] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    fetchGamaComercial();
  }, []);

  const fetchGamaComercial = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/gama-comercial');
      const data = await response.json();
      setGamas(data);
    } catch (error) {
      console.error('Error fetching gama comercial data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!novaGama.trim()) return;
    
    try {
      const response = await fetch('/api/gama-comercial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ designacao: novaGama })
      });
      
      if (response.ok) {
        const newGama = await response.json();
        setGamas(prev => [...prev, newGama]);
        setNovaGama('');
      }
    } catch (error) {
      console.error('Error saving gama comercial:', error);
    }
  };

  const startEditing = (gama) => {
    setEditingId(gama.id);
    setEditValue(gama.designacao);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };

  const saveEdit = async (id) => {
    if (!editValue.trim()) return;
    
    try {
      const response = await fetch(`/api/gama-comercial/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ designacao: editValue })
      });
      
      if (response.ok) {
        setGamas(prev => 
          prev.map(gama => 
            gama.id === id ? { ...gama, designacao: editValue } : gama
          )
        );
        setEditingId(null);
        setEditValue('');
      }
    } catch (error) {
      console.error('Error updating gama comercial:', error);
    }
  };

  const deleteGama = async (id) => {
    if (!confirm('Tem certeza que deseja excluir esta gama comercial?')) return;
    
    try {
      const response = await fetch(`/api/gama-comercial/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setGamas(prev => prev.filter(gama => gama.id !== id));
      }
    } catch (error) {
      console.error('Error deleting gama comercial:', error);
    }
  };

  return (
    <Card>
      <Card.Header>
        <h4>Gestão de Gama Comercial</h4>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit} className="mb-4">
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Nova Gama Comercial"
              value={novaGama}
              onChange={(e) => setNovaGama(e.target.value)}
              className="me-2"
            />
            <Button type="submit" variant="primary">Adicionar</Button>
          </div>
        </Form>
        
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Designação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {gamas.map(gama => (
                <tr key={gama.id}>
                  <td>{gama.id}</td>
                  <td>
                    {editingId === gama.id ? (
                      <Form.Control
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    ) : (
                      gama.designacao
                    )}
                  </td>
                  <td>
                    {editingId === gama.id ? (
                      <>
                        <Button 
                          variant="success" 
                          size="sm" 
                          onClick={() => saveEdit(gama.id)}
                          className="me-1"
                        >
                          Salvar
                        </Button>
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          onClick={cancelEditing}
                        >
                          Cancelar
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="primary" 
                          size="sm" 
                          onClick={() => startEditing(gama)}
                          className="me-1"
                        >
                          Editar
                        </Button>
                        <Button 
                          variant="danger" 
                          size="sm" 
                          onClick={() => deleteGama(gama.id)}
                        >
                          Excluir
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {gamas.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">
                    Nenhuma gama comercial cadastrada.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
}