import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({ corte: '', preco: '', categoria: '', image: null });
  const [editingProduto, setEditingProduto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const { data, error } = await supabase.from('produtos').select('*');
    if (error) console.error('Erro ao carregar produtos:', error);
    else setProdutos(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (editingProduto) {
      await atualizarProduto();
    } else {
      await adicionarProduto();
    }
    setShowModal(false);
  }

  async function adicionarProduto() {
    const { data, error } = await supabase.from('produtos').insert([{
      corte: novoProduto.corte,
      preco: novoProduto.preco,
      categoria: novoProduto.categoria,
      image: novoProduto.image
    }]);
    if (error) console.error('Erro ao adicionar produto:', error);
    else {
      carregarProdutos();
      setNovoProduto({ corte: '', preco: '', categoria: '', image: null });
    }
  }
  
  async function atualizarProduto() {
    if (!editingProduto) return;
  
    if (editingProduto.image !== editingProduto.originalImage) {
      const oldImagePath = editingProduto.originalImage?.split('/').pop();
      if (oldImagePath) {
        const { error: deleteError } = await supabase.storage
          .from('images')
          .remove([oldImagePath]);
        if (deleteError) console.error('Erro ao deletar imagem antiga:', deleteError);
      }
    }
  
    const { error } = await supabase
      .from('produtos')
      .update({
        corte: editingProduto.corte,
        preco: editingProduto.preco,
        categoria: editingProduto.categoria,
        image: editingProduto.image
      })
      .eq('id', editingProduto.id);
  
    if (error) console.error('Erro ao atualizar produto:', error);
    else {
      carregarProdutos();
      setEditingProduto(null);
    }
  }

  async function atualizarProduto() {
    if (!editingProduto) return;

    if (editingProduto.image !== editingProduto.originalImage) {
      const oldImagePath = editingProduto.originalImage.split('/').pop();
      const { error: deleteError } = await supabase.storage
        .from('images')
        .remove([oldImagePath]);
      if (deleteError) console.error('Erro ao deletar imagem antiga:', deleteError);
    }

    const { error } = await supabase
      .from('produtos')
      .update({
        corte: editingProduto.corte,
        preco: editingProduto.preco,
        categoria: editingProduto.categoria,
        image: editingProduto.image
      })
      .eq('id', editingProduto.id);

    if (error) console.error('Erro ao atualizar produto:', error);
    else {
      carregarProdutos();
      setEditingProduto(null);
    }
  }

  async function deletarProduto(id, imagePath) {
    if (imagePath) {
      const imageToDelete = imagePath.split('/').pop();
      const { error: deleteImageError } = await supabase.storage
        .from('images')
        .remove([imageToDelete]);
      if (deleteImageError) console.error('Erro ao deletar imagem:', deleteImageError);
    }

    const { error } = await supabase.from('produtos').delete().eq('id', id);
    if (error) console.error('Erro ao deletar produto:', error);
    else carregarProdutos();
  }

  async function uploadImagem(e) {
  const file = e.target.files[0];
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from('images')
    .upload(filePath, file);
  
  if (error) {
    console.error('Erro ao fazer upload da imagem:', error);
  } else {
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);
    
    if (editingProduto) {
      setEditingProduto({ ...editingProduto, image: publicUrl });
    } else {
      setNovoProduto({ ...novoProduto, image: publicUrl });
    }
  }
}
  function startEditing(produto) {
    setEditingProduto({ ...produto, originalImage: produto.image });
    setShowModal(true);
  }

  function openModal() {
    setEditingProduto(null);
    setNovoProduto({ corte: '', preco: '', categoria: '', image: null });
    setShowModal(true);
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Administração de Produtos</h1>
        <button className="btn btn-primary" onClick={openModal}>Novo Produto</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Corte</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Imagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.corte}</td>
              <td>{produto.preco}</td>
              <td>{produto.categoria}</td>
              <td>
                {produto.image && (
                  <img src={produto.image} alt={produto.corte} style={{ width: '50px', height: '50px' }} />
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => startEditing(produto)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletarProduto(produto.id, produto.image)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editingProduto ? 'Editar Produto' : 'Inserir Novo Produto'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Corte"
                    value={editingProduto ? editingProduto.corte : novoProduto.corte}
                    onChange={(e) => editingProduto 
                      ? setEditingProduto({ ...editingProduto, corte: e.target.value })
                      : setNovoProduto({ ...novoProduto, corte: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Preço"
                    value={editingProduto ? editingProduto.preco : novoProduto.preco}
                    onChange={(e) => editingProduto
                      ? setEditingProduto({ ...editingProduto, preco: e.target.value })
                      : setNovoProduto({ ...novoProduto, preco: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-control"
                    value={editingProduto ? editingProduto.categoria : novoProduto.categoria}
                    onChange={(e) => editingProduto
                      ? setEditingProduto({ ...editingProduto, categoria: e.target.value })
                      : setNovoProduto({ ...novoProduto, categoria: e.target.value })}
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="Bovinos">Bovinos</option>
                    <option value="Suínos">Suínos</option>
                    <option value="Aves">Aves</option>
                    <option value="Caprinos">Caprinos</option>
                    <option value="Caixas">Caixas</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={uploadImagem}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {editingProduto ? 'Atualizar' : 'Adicionar'} Produto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}