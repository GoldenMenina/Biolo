import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Admin() {
  const [produtos, setProdutos] = useState([]);
  const [formdata, setFormdata] = useState();
  const [imgModal, setImagemodal] = useState(false);
  const [searchCorte, setSearchCorte] = useState('');
  const [searchCategoria, setSearchCategoria] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  useEffect(() => {
    carregarProdutos();
  }, []);
  useEffect(() => {
  const session = localStorage.getItem('session');
  if (session) {
    setIsAuthenticated(true);
  }
  carregarProdutos();
}, []);
function handleLogin(e) {
  e.preventDefault();
  if (email === process.env.NEXT_PUBLIC_USER_EMAIL && password === process.env.NEXT_PUBLIC_USER_PASSWORD) {
    setIsAuthenticated(true);
    localStorage.setItem('session', 'true');
  } else {
    alert('Invalid credentials');
  }
}

function handleLogout() {
  setIsAuthenticated(false);
  localStorage.removeItem('session');
}
  
  const [novoProduto, setNovoProduto] = useState({ corte: '', preco: '', categoria: '', image: null });
  const [editingProduto, setEditingProduto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    carregarProdutos();
  }, []);
  
  const filteredProdutos = produtos.filter(produto => {
    const corteMatch = produto.corte.toLowerCase().includes(searchCorte.toLowerCase());
    const categoriaMatch = searchCategoria === '' || produto.categoria === searchCategoria;
    return corteMatch && categoriaMatch;
  });

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
  
  async function uploadImagem(e) {
    if(editingProduto){
      setImagemodal(true)
    }
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'utjuauqd');
    
    setFormdata(formData);
  }
  
  async function cloudinaryUp(){
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbagu0ju8/image/upload`,
        {
          method: 'POST',
          body: formdata,
        }
      );

      const data = await response.json();
      
      return(data.secure_url)
     
  }

  async function adicionarProduto() {
    const img = await cloudinaryUp()
    const { data, error } = await supabase.from('produtos').insert([{
      corte: novoProduto.corte,
      preco: novoProduto.preco,
      categoria: novoProduto.categoria,
      image: img
    }]);

    if (error) {
      console.error('Erro ao adicionar produto:', error);
    } else {
      console.log('Produto adicionado:', data);
      
      carregarProdutos();
      setNovoProduto({ corte: '', preco: '', categoria: '', image: null });
    }
  }

  async function atualizarProduto() {
    if (!editingProduto) return;
    var img =''
    if(imgModal){
     img = await cloudinaryUp()
     deletarProduto('img',editingProduto.image)
}
    const { error } = await supabase
      .from('produtos')
      .update({
        corte: editingProduto.corte,
        preco: editingProduto.preco,
        categoria: editingProduto.categoria,
        image: imgModal?img:editingProduto.image
      })
      .eq('id', editingProduto.id);

    if (error) {
      console.error('Erro ao atualizar produto:', error);
    } else {
      console.log('Produto atualizado');
      carregarProdutos();
      setEditingProduto(null)
      setImagemodal(false)
    }
  }

  async function deletarProduto(id, imageUrl) {
    // Delete from Cloudinary
    if (imageUrl) {
      const publicId = imageUrl.split('/').pop().split('.')[0];
      try {
        await fetch('/api/deleteImage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ publicId }),
        });
      } catch (error) {
        console.error('Erro ao deletar imagem do Cloudinary:', error);
      }
    }
if(id != 'img'){
    const { error } = await supabase.from('produtos').delete().eq('id', id);
    if (error) console.error('Erro ao deletar produto:', error);
    else carregarProdutos();
  
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

  if (!isAuthenticated) {
    return (
      <div className="modal d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3 text-center">
                  <i className="fas fa-user fa-3x"></i>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
 

  return (
    <div className="container mt-5">
    <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Administração de Produtos</h1>
        <button className="btn btn-primary" onClick={openModal}>Novo Produto</button>
      </div>
     <div className="mb-3 row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por corte"
            value={searchCorte}
            onChange={(e) => setSearchCorte(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            value={searchCategoria}
            onChange={(e) => setSearchCategoria(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Bovinos">Bovinos</option>
            <option value="Suínos">Suínos</option>
            <option value="Aves">Aves</option>
            <option value="Caprinos">Caprinos</option>
            <option value="Caixas">Caixas</option>
          </select>
        </div>
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
       {filteredProdutos.map((produto) => (
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
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fechar</button>
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
                    accept="image/*"
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