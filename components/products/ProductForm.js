import { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap';

// Mock data - simulating database records
const MOCK_GAMA_COMERCIAL = [];

// Mock products data
const MOCK_PRODUTOS = [];

export default function ProductForm({ show, onClose, produtoEditado, onSave }) {
  const [formData, setFormData] = useState({
    id: '',
    designacao: '',
    gama_comercial_id: '',
    imagem: '',
    quantidade: '',
    status_do_produto_id: '1',
    data_de_inicio_de_comercializacao: '',
    data_de_fim_de_comercializacao: ''
  });

  const [gamaComercialOptions, setGamaComercialOptions] = useState([]);
  const [showGamaComercialForm, setShowGamaComercialForm] = useState(false);
  const [novaGamaComercial, setNovaGamaComercial] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (show) {
      // Simulate API fetch delay
      setIsLoading(true);
      setTimeout(() => {
        // Reset form or populate with existing product
        if (produtoEditado) {
          // Find the product in our mock data
          const produto = MOCK_PRODUTOS.find(p => p.id === produtoEditado.id) || produtoEditado;
          setFormData({
            ...produto,
            quantidade: produto.quantidade || ''
          });
          setImagePreview(produto.imagem || '');
        } else {
          setFormData({
            id: '',
            designacao: '',
            gama_comercial_id: '',
            imagem: '',
            quantidade: '',
            status_do_produto_id: '1',
            data_de_inicio_de_comercializacao: '',
            data_de_fim_de_comercializacao: ''
          });
          setImagePreview('');
        }
        
        // Get gama comercial options (simulate API call)
        fetchGamaComercial();
        setIsLoading(false);
      }, 500); // Simulate network delay
    }
  }, [produtoEditado, show]);

  // Simulated API calls
  const fetchGamaComercial = () => {
    // Simulate fetching from database
    setGamaComercialOptions(MOCK_GAMA_COMERCIAL);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Update image preview if URL is changed manually
    if (name === 'imagem') {
      setImagePreview(value);
    }
    
    // Reset success/error messages when form changes
    setSaveSuccess(false);
    setErrorMessage('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.match('image.*')) {
      setErrorMessage('Por favor, selecione apenas arquivos de imagem.');
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('A imagem selecionada é muito grande. O tamanho máximo é 5MB.');
      return;
    }
    
    // Create a preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
      // In a real app, you would upload this to a server and get a URL back
      // For now, we'll just use the data URL as a placeholder
      setFormData(prev => ({
        ...prev,
        imagem: event.target.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleGamaComercialSubmit = (e) => {
    e.preventDefault();
    
    if (!novaGamaComercial.trim()) return;
    
    // Simulate API call to add new gama comercial
    setIsLoading(true);
    setTimeout(() => {
      const newId = Math.max(...gamaComercialOptions.map(g => g.id), 0) + 1;
      const newGama = { id: newId, designacao: novaGamaComercial };
      
      // Add to our "database"
      setGamaComercialOptions(prev => [...prev, newGama]);
      
      // Select the new option
      setFormData(prev => ({
        ...prev,
        gama_comercial_id: newId.toString()
      }));
      
      // Reset form
      setNovaGamaComercial('');
      setShowGamaComercialForm(false);
      setIsLoading(false);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.designacao || !formData.gama_comercial_id || formData.quantidade === '') {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Simulate API call to save product
    setIsSaving(true);
    setTimeout(() => {
      // If editing, update the product
      if (produtoEditado) {
        console.log('Produto atualizado:', formData);
      } else {
        // Create new product - generate ID
        const newProduct = {
          ...formData,
          id: Math.max(...MOCK_PRODUTOS.map(p => p.id), 0) + 1
        };
        console.log('Novo produto criado:', newProduct);
        // In a real app, we would add this to our database
        MOCK_PRODUTOS.push(newProduct);
      }
      
      setIsSaving(false);
      setSaveSuccess(true);
      
      // Close after a brief delay to show success message
      setTimeout(() => {
        onSave && onSave();
        onClose();
      }, 1000);
    }, 800);
  };

  // Find the gama comercial name for display
  const getGamaName = (id) => {
    const gama = gamaComercialOptions.find(g => g.id === parseInt(id));
    return gama ? gama.designacao : '';
  };

  // Trigger file input click
  const handleSelectImage = () => {
    fileInputRef.current.click();
  };

  // Remove selected image
  const handleRemoveImage = () => {
    setImagePreview('');
    setFormData(prev => ({
      ...prev,
      imagem: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered backdrop="static">
      <Modal.Header closeButton className="bg-light border-bottom-0">
        <Modal.Title className="text-primary">
          {produtoEditado ? 'Editar Produto' : 'Novo Produto'}
        </Modal.Title>
      </Modal.Header>
      
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="text-center">
            <Spinner animation="border" variant="primary" role="status" style={{ width: '3rem', height: '3rem' }} />
            <p className="mt-3 text-muted">Carregando...</p>
          </div>
        </div>
      ) : (
        <>
          <Modal.Body className="pt-0 px-4">
            <Form id="productForm" onSubmit={handleSubmit}>
              {saveSuccess && (
                <div className="alert alert-success mt-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <span>Produto {produtoEditado ? 'atualizado' : 'criado'} com sucesso!</span>
                </div>
              )}
              
              {errorMessage && (
                <div className="alert alert-danger mt-3 d-flex align-items-center">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="card border-0 shadow-sm rounded mt-3 mb-4">
                <div className="card-header bg-light py-2">
                  <h6 className="mb-0">Informações Básicas</h6>
                </div>
                <div className="card-body pt-3">
                  <Row>
                    <Col md={7}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Designação <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="designacao" 
                          value={formData.designacao} 
                          onChange={handleChange} 
                          required 
                          className="border-secondary-subtle"
                          placeholder="Nome do produto"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={5}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Quantidade <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="number" 
                          name="quantidade" 
                          value={formData.quantidade} 
                          onChange={handleChange}
                          required
                          min="0"
                          className="border-secondary-subtle"
                          placeholder="0"
                        />
                        <Form.Text className="text-muted">
                          Quantidade disponível para venda
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={7}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Gama Comercial <span className="text-danger">*</span></Form.Label>
                        <div className="input-group">
                          <Form.Select 
                            name="gama_comercial_id" 
                            value={formData.gama_comercial_id} 
                            onChange={handleChange}
                            required
                            className="border-secondary-subtle"
                          >
                            <option value="">Selecione uma gama</option>
                            {gamaComercialOptions.map(gama => (
                              <option key={gama.id} value={gama.id}>
                                {gama.designacao}
                              </option>
                            ))}
                          </Form.Select>
                          <Button 
                            variant="outline-secondary" 
                            onClick={() => setShowGamaComercialForm(true)}
                            title="Adicionar nova gama"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </Button>
                        </div>
                        {formData.gama_comercial_id && (
                          <Form.Text className="text-muted">
                            Gama selecionada: {getGamaName(formData.gama_comercial_id)}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={5}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Status do Produto</Form.Label>
                        <Form.Select 
                          name="status_do_produto_id" 
                          value={formData.status_do_produto_id} 
                          onChange={handleChange}
                          required
                          className="border-secondary-subtle"
                        >
                          <option value="1">Activo</option>
                          <option value="2">Discontinuado</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                          {formData.status_do_produto_id === '1' ? 
                            'Produto disponível para venda' : 
                            'Produto não disponível para novas vendas'}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
              
              {showGamaComercialForm && (
                <div className="card border-0 shadow-sm rounded mb-4">
                  <div className="card-header bg-light d-flex justify-content-between align-items-center py-2">
                    <h6 className="mb-0">Nova Gama Comercial</h6>
                    <Button 
                      variant="link" 
                      className="p-0 text-muted"
                      onClick={() => setShowGamaComercialForm(false)}
                      disabled={isLoading}
                    >
                      <i className="bi bi-x-lg"></i>
                    </Button>
                  </div>
                  <div className="card-body">
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Nome da gama comercial"
                        value={novaGamaComercial}
                        onChange={(e) => setNovaGamaComercial(e.target.value)}
                        className="border-secondary-subtle"
                      />
                      <Button 
                        variant="success" 
                        onClick={handleGamaComercialSubmit}
                        disabled={!novaGamaComercial.trim() || isLoading}
                        className="d-flex align-items-center"
                      >
                        {isLoading ? (
                          <><Spinner size="sm" animation="border" className="me-1" /> Adicionando</>
                        ) : (
                          <><i className="bi bi-plus-lg me-1"></i> Adicionar</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="card border-0 shadow-sm rounded mb-4">
                <div className="card-header bg-light py-2">
                  <h6 className="mb-0">Detalhes do Produto</h6>
                </div>
                <div className="card-body pt-3">
                  <Row>
                    <Col md={imagePreview ? 7 : 12}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Imagem do Produto</Form.Label>
                        <div className="d-flex gap-2 mb-2">
                          <Button 
                            variant="outline-primary" 
                            onClick={handleSelectImage} 
                            className="d-flex align-items-center"
                          >
                            <i className="bi bi-upload me-2"></i>
                            Selecionar Imagem
                          </Button>
                          {imagePreview && (
                            <Button 
                              variant="outline-danger" 
                              onClick={handleRemoveImage}
                              className="d-flex align-items-center"
                            >
                              <i className="bi bi-trash me-2"></i>
                              Remover
                            </Button>
                          )}
                        </div>
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="d-none"
                        />
                        <Form.Control 
                          type="text" 
                          name="imagem" 
                          value={formData.imagem} 
                          onChange={handleChange} 
                          placeholder="https://exemplo.com/imagem.jpg"
                          className="border-secondary-subtle"
                        />
                        <Form.Text className="text-muted">
                          Selecione uma imagem do seu dispositivo ou insira uma URL
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    {imagePreview && (
                      <Col md={5}>
                        <div className="mb-3">
                          <Form.Label className="fw-medium">Preview</Form.Label>
                          <div className="border rounded p-2 d-flex justify-content-center align-items-center bg-light" style={{ height: '150px' }}>
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              style={{ maxHeight: '140px', maxWidth: '100%', objectFit: 'contain' }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/150x150?text=Erro+na+imagem';
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    )}
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Data de Início</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="data_de_inicio_de_comercializacao" 
                          value={formData.data_de_inicio_de_comercializacao ? formData.data_de_inicio_de_comercializacao.split('T')[0] : ''} 
                          onChange={handleChange} 
                          className="border-secondary-subtle"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Data de Fim</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="data_de_fim_de_comercializacao" 
                          value={formData.data_de_fim_de_comercializacao ? formData.data_de_fim_de_comercializacao.split('T')[0] : ''} 
                          onChange={handleChange} 
                          className="border-secondary-subtle"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
            </Form>
          </Modal.Body>
          
          <Modal.Footer className="border-top-0 pt-0">
            <Button variant="light" onClick={onClose} disabled={isSaving} className="border">
              Cancelar
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              form="productForm"
              disabled={isLoading || isSaving}
              className="d-flex align-items-center"
            >
              {isSaving ? (
                <>
                  <Spinner size="sm" animation="border" className="me-2" /> 
                  {produtoEditado ? 'Atualizando...' : 'Salvando...'}
                </>
              ) : (
                <>
                  <i className="bi bi-check-lg me-2"></i>
                  {produtoEditado ? 'Atualizar' : 'Salvar'}
                </>
              )}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}