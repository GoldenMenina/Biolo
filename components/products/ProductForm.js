import { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form, Row, Col, Spinner } from 'react-bootstrap';
import { supabase } from '../../lib/supabaseClient'; // Import supabase client

// Moved cloudinaryUp outside the component to avoid re-declaration and potential linting issues
async function cloudinaryUp(file, setErrorMessage) { // Pass setErrorMessage as a parameter
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  

  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("cloud_name", cloudName);
  formdata.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`,
      {
        method: 'POST',
        body: formdata,
      }
    );
    console.log(response)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${response.statusText}. Details: ${JSON.stringify(errorData)}`);
    }
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    setErrorMessage(`Erro ao fazer upload da imagem: ${error.message}`); // Set error message in the component
    return null;
  }
}

export default function ProductForm({ show, onClose, produtoEditado, onSave }) {
  const [formData, setFormData] = useState({
    produto_id: null,
    nome: '',
    preco: '',
    categoria: '',
    image: '',
    tipo_corte: '',
    quantidade_estoque: 0,
    activo: false, // Changed default to false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file object

  useEffect(() => {
    if (show) {
      setErrorMessage('');
      setSaveSuccess(false);
      if (produtoEditado) {
        setFormData({
          produto_id: produtoEditado.produto_id,
          nome: produtoEditado.nome || '',
          preco: produtoEditado.preco || '',
          categoria: produtoEditado.categoria || '',
          image: produtoEditado.image || '',
          tipo_corte: produtoEditado.tipo_corte || '',
          quantidade_estoque: produtoEditado.quantidade_estoque || 0,
          activo: produtoEditado.activo !== undefined ? produtoEditado.activo : true,
        });
        setImagePreview(produtoEditado.image || '');
      } else {
        setFormData({
          produto_id: null,
          nome: '',
          preco: '',
          categoria: '',
          image: '',
          tipo_corte: '',
          quantidade_estoque: 0,
          activo: false, // Ensure new products default to false
        });
        setImagePreview('');
      }
      setSelectedFile(null); // Clear selected file on modal open/close
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear file input
      }
    }
  }, [produtoEditado, show]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setSaveSuccess(false);
    setErrorMessage('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setSelectedFile(null);
      setImagePreview('');
      setFormData(prev => ({ ...prev, image: '' }));
      return;
    }

    if (!file.type.match('image.*')) {
      setErrorMessage('Por favor, selecione apenas arquivos de imagem.');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setErrorMessage('A imagem selecionada é muito grande. O tamanho máximo é 5MB.');
      setSelectedFile(null);
      setImagePreview('');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(file);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSaving(true);

    const { nome, preco, categoria, tipo_corte, quantidade_estoque, activo } = formData;

    // Basic validation for required fields
    if (!nome.trim()) {
      setErrorMessage('O nome do produto é obrigatório.');
      setIsSaving(false);
      return;
    }

    // Validate preco
    const parsedPreco = parseFloat(preco);
    if (isNaN(parsedPreco) || parsedPreco < 0) {
      setErrorMessage('O preço deve ser um número positivo.');
      setIsSaving(false);
      return;
    }

    // Validate quantidade_estoque
    const parsedQuantidadeEstoque = parseInt(quantidade_estoque);
    if (isNaN(parsedQuantidadeEstoque) || parsedQuantidadeEstoque < 0) {
      setErrorMessage('A quantidade em estoque deve ser um número não negativo.');
      setIsSaving(false);
      return;
    }

    // For new products, ensure all required fields are present.
    // For existing products, we assume initial values are valid,
    // and only validate if they are changed or if they are explicitly required.
    // 'categoria' and 'tipo_corte' are text fields, if they are not required,
    // an empty string is acceptable.
    if (!categoria.trim()) {
      setErrorMessage('A categoria do produto é obrigatória.');
      setIsSaving(false);
      return;
    }

    let imageUrl = formData.image;
    if (selectedFile) {
      const uploadedUrl = await cloudinaryUp(selectedFile, setErrorMessage); // Pass setErrorMessage
      if (!uploadedUrl) {
        setIsSaving(false);
        return; // Stop if image upload failed (error message set by cloudinaryUp)
      }
      imageUrl = uploadedUrl;
    }

    const productData = {
      nome,
      preco: parseFloat(preco),
      categoria,
      image: imageUrl,
      tipo_corte,
      quantidade_estoque: parseInt(quantidade_estoque),
      activo,
    };

    let error = null;
    if (produtoEditado) {
      // Update existing product
      const { error: updateError } = await supabase
        .from('produtos')
        .update(productData)
        .eq('produto_id', formData.produto_id);
      error = updateError;
    } else {
      // Create new product
      const { error: insertError } = await supabase
        .from('produtos')
        .insert([productData]);
      error = insertError;
    }

    if (error) {
      console.error('Erro ao salvar produto:', error);
      setErrorMessage(`Erro ao salvar produto: ${error.message}`);
    } else {
      setSaveSuccess(true);
      onSave && onSave(); // Trigger refresh in parent
      setTimeout(() => {
        onClose();
      }, 1000);
    }
    setIsSaving(false);
  };

  const handleSelectImage = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setFormData(prev => ({
      ...prev,
      image: ''
    }));
    setSelectedFile(null);
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
                  <h6 className="mb-0">Informações do Produto</h6>
                </div>
                <div className="card-body pt-3">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Nome <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="nome" 
                          value={formData.nome} 
                          onChange={handleChange} 
                          required 
                          className="border-secondary-subtle"
                          placeholder="Nome do produto"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Preço <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="number" 
                          name="preco" 
                          value={formData.preco} 
                          onChange={handleChange}
                          required
                          min="0"
                          step="0.01"
                          className="border-secondary-subtle"
                          placeholder="0.00"
                        />
                        <Form.Text className="text-muted">
                          Preço unitário do produto
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Categoria <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="categoria" 
                          value={formData.categoria} 
                          onChange={handleChange}
                          required
                          className="border-secondary-subtle"
                          placeholder="Ex: Frutas, Legumes, Carnes"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Tipo de Corte</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="tipo_corte" 
                          value={formData.tipo_corte} 
                          onChange={handleChange}
                          className="border-secondary-subtle"
                          placeholder="Ex: Cubos, Fatias, Inteiro"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Quantidade em Estoque <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="number" 
                          name="quantidade_estoque" 
                          value={formData.quantidade_estoque} 
                          onChange={handleChange}
                          required
                          min="0"
                          className="border-secondary-subtle"
                          placeholder="0"
                        />
                        <Form.Text className="text-muted">
                          Quantidade disponível no estoque
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Produto Ativo</Form.Label>
                        <Form.Check 
                          type="switch"
                          id="activo-switch"
                          name="activo"
                          label={formData.activo ? 'Sim (Disponível para venda)' : 'Não (Indisponível para venda)'}
                          checked={formData.activo}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm rounded mb-4">
                <div className="card-header bg-light py-2">
                  <h6 className="mb-0">Imagem do Produto</h6>
                </div>
                <div className="card-body pt-3">
                  <Row>
                    <Col md={imagePreview ? 7 : 12}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium">Upload de Imagem</Form.Label>
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
                          name="image" // Changed from 'imagem' to 'image'
                          value={formData.image} 
                          onChange={handleChange} 
                          placeholder="URL da imagem (opcional)"
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
