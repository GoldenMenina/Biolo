import { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Table } from 'react-bootstrap';

export default function ProductPriceForm({ show, onClose, productId, onSave }) {
  const [prices, setPrices] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [formData, setFormData] = useState({
    produto_id: productId,
    unidade_de_venda: '',
    preco_unitario: '',
    status_de_comercializacao_id: '',
    data_de_inicio_de_comercializacao: '',
    data_de_fim_de_comercializacao: ''
  });

  useEffect(() => {
    if (show && productId) {
      fetchProductPrices();
      fetchStatusOptions();
      setFormData(prev => ({
        ...prev,
        produto_id: productId
      }));
    }
  }, [show, productId]);

  const fetchProductPrices = async () => {
    try {
      const response = await fetch(`/api/produtos/${productId}/precos`);
      const data = await response.json();
      setPrices(data);
    } catch (error) {
      console.error('Error fetching product prices:', error);
    }
  };

  const fetchStatusOptions = async () => {
    try {
      const response = await fetch('/api/status-de-comercializacao');
      const data = await response.json();
      setStatusOptions(data);
    } catch (error) {
      console.error('Error fetching status options:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/preco-de-produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        fetchProductPrices();
        setFormData({
          produto_id: productId,
          unidade_de_venda: '',
          preco_unitario: '',
          status_de_comercializacao_id: '',
          data_de_inicio_de_comercializacao: '',
          data_de_fim_de_comercializacao: ''
        });
        onSave && onSave();
      }
    } catch (error) {
      console.error('Error saving price:', error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Preços do Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="mb-3">Histórico de Preços</h5>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Unidade de Venda</th>
              <th>Preço Unitário</th>
              <th>Status</th>
              <th>Data Início</th>
              <th>Data Fim</th>
            </tr>
          </thead>
          <tbody>
            {prices.length > 0 ? (
              prices.map(price => (
                <tr key={price.id}>
                  <td>{price.unidade_de_venda}</td>
                  <td>{price.preco_unitario}</td>
                  <td>{price.status_designacao}</td>
                  <td>{formatDate(price.data_de_inicio_de_comercializacao)}</td>
                  <td>{formatDate(price.data_de_fim_de_comercializacao)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Sem preços definidos</td>
              </tr>
            )}
          </tbody>
        </Table>

        <h5 className="mt-4 mb-3">Adicionar Novo Preço</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Unidade de Venda</Form.Label>
                <Form.Control
                  type="number"
                  name="unidade_de_venda"
                  value={formData.unidade_de_venda}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Preço Unitário</Form.Label>
                <Form.Control
                  type="text"
                  name="preco_unitario"
                  value={formData.preco_unitario}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Status de Comercialização</Form.Label>
                <Form.Select
                  name="status_de_comercializacao_id"
                  value={formData.status_de_comercializacao_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um status</option>
                  {statusOptions.map(status => (
                    <option key={status.id} value={status.id}>{status.designacao}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Data de Início</Form.Label>
                <Form.Control
                  type="date"
                  name="data_de_inicio_de_comercializacao"
                  value={formData.data_de_inicio_de_comercializacao}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Data de Fim</Form.Label>
                <Form.Control
                  type="date"
                  name="data_de_fim_de_comercializacao"
                  value={formData.data_de_fim_de_comercializacao}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary">Adicionar Preço</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}