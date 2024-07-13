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

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const { data, error } = await supabase.from('produtos').select('*');
    if (error) console.error('Erro ao carregar produtos:', error);
    else setProdutos(data);
  }

  async function adicionarProduto(e) {
    e.preventDefault();
    const { data, error } = await supabase.from('produtos').insert([novoProduto]);
    if (error) console.error('Erro ao adicionar produto:', error);
    else {
      carregarProdutos();
      setNovoProduto({ corte: '', preco: '', categoria: '', image: null });
    }
  }

  async function atualizarProduto(e) {
    e.preventDefault();
    if (!editingProduto) return;

    // If a new image was uploaded, delete the old one
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
    // Delete the image from storage
    if (imagePath) {
      const imageToDelete = imagePath.split('/').pop();
      const { error: deleteImageError } = await supabase.storage
        .from('images')
        .remove([imageToDelete]);
      if (deleteImageError) console.error('Erro ao deletar imagem:', deleteImageError);
    }

    // Delete the product from the database
    const { error } = await supabase.from('produtos').delete().eq('id', id);
    if (error) console.error('Erro ao deletar produto:', error);
    else carregarProdutos();
  }

  async function uploadImagem(e, isEditing = false) {
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
      
      if (isEditing) {
        setEditingProduto({ ...editingProduto, image: publicUrl });
      } else {
        setNovoProduto({ ...novoProduto, image: publicUrl });
      }
    }
  }

  function startEditing(produto) {
    setEditingProduto({ ...produto, originalImage: produto.image });
  }

  return (
    <div className="container mt-5">
      <h1>Administração de Produtos</h1>
      
      {!editingProduto ? (
         <form onSubmit={adicionarProduto} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Corte"
            value={novoProduto.corte}
            onChange={(e) => setNovoProduto({ ...novoProduto, corte: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Preço"
            value={novoProduto.preco}
            onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
          />
        </div>
     <div className="mb-3">
          <select
            className="form-control"
            value={novoProduto.categoria}
            onChange={(e) => setNovoProduto({ ...novoProduto, categoria: e.target.value })}
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
        <button type="submit" className="btn btn-primary">Adicionar Produto</button>
      </form>

      ) : (
        <form onSubmit={atualizarProduto} className="mb-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Corte"
              value={editingProduto.corte}
              onChange={(e) => setEditingProduto({ ...editingProduto, corte: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Preço"
              value={editingProduto.preco}
              onChange={(e) => setEditingProduto({ ...editingProduto, preco: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-control"
              value={editingProduto.categoria}
              onChange={(e) => setEditingProduto({ ...editingProduto, categoria: e.target.value })}
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
              onChange={(e) => uploadImagem(e, true)}
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">Atualizar Produto</button>
          <button type="button" className="btn btn-secondary" onClick={() => setEditingProduto(null)}>Cancelar</button>
        </form>
      )}

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
    </div>
  );
}