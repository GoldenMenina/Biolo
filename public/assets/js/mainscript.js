document.addEventListener("alpine:init", () => {
  CheckCart();
  Alpine.store("produtos", [
    { id: 1, corte: "Acém", preco: 7688, categoria: "Bovinos", image:"../assets/images/carnes/acembovino.jpg" },
    { id: 2, corte: "Agulha", preco: 5938, categoria: "Bovinos", image:"../assets/images/carnes/agulhabovinos.png" },
    { id: 3, corte: "Alcatra", preco: 11138, categoria: "Bovinos",image:"../assets/images/carnes/alcatrabovino.png" },
    {
      id: 4,
      corte: "Almondegas Com Tempero",
      preco: 6670,
      categoria: "Bovinos",image:"../assets/images/carnes/almondegabovino.jpg"
    },
    {
      id: 5,
      corte: "Almondegas sem Tempero",
      preco: 6370,
      categoria: "Bovinos",image:"../assets/images/carnes/almondegabovino.jpg"
    },
    { id: 6, corte: "Carne Picada", preco: 6018, categoria: "Bovinos",image:"../assets/images/carnes/carnesecabovino.jpg" },
    { id: 7, corte: "Carne Seca", preco: 12000, categoria: "Bovinos" ,image:"../assets/images/carnes/carnesecabovino.jpg"},
    { id: 8, corte: "Chambão", preco: 5938, categoria: "Bovinos",image:"../assets/images/carnes/chambaobovino.jpg" },
    { id: 9, corte: "Coração", preco: 2367, categoria: "Bovinos",image:"../assets/images/carnes/coracaobovino.jpg" },
    { id: 10, corte: "Costela em Tira", preco: 6786, categoria: "Bovinos" ,image:"../assets/images/carnes/costelatirabovino.png"},
    { id: 11, corte: "Cachaço", preco: 5938, categoria: "Bovinos" ,image:"../assets/images/carnes/cachussobovino.jpg"},
    { id: 12, corte: "Costeleta", preco: 6715, categoria: "Bovinos" ,image:"../assets/images/carnes/costeletabovino.png"},
    { id: 13, corte: "Cupim", preco: 5938, categoria: "Bovinos",image:"../assets/images/carnes/cupimbovino.png" },
    { id: 14, corte: "Dobrada", preco: 4000, categoria: "Bovinos",image:"../assets/images/carnes/dobrada.webp" },
    { id: 15, corte: "Entrecôte", preco: 12438, categoria: "Bovinos",image:"../assets/images/carnes/entrecotebovino.jpg" },
    {
      id: 16,
      corte: "Espetada de Alcatra",
      preco: 13000,
      categoria: "Bovinos",image:"../assets/images/carnes/espectadaalctra.jpg" 
    },
    { id: 17, corte: "Fígado", preco: 4075, categoria: "Bovinos" 
      ,image:"../assets/images/carnes/figado.png" 
      
    },
    
    
    { id: 18, corte: "Ganso", preco: 5938, categoria: "Bovinos" ,image:"../assets/images/carnes/ganso.jpg" },
    {
      id: 19,
      corte: "Hambúrguer Com Tempero",
      preco: 6670,
      categoria: "Bovinos"
      ,image:"../assets/images/carnes/ham.png" 
    },
    {
      id: 20,
      corte: "Hambúrguer Sem Tempero",
      preco: 6370,
      categoria: "Bovinos",image:"../assets/images/carnes/ham.png" 
    },
    { id: 21, corte: "Lombinho", preco: 13941, categoria: "Bovinos",image:"../assets/images/carnes/lombinha.jpg"  },
    
    
    
    { id: 22, corte: "Maminha", preco: 8550, categoria: "Bovinos",image:"../assets/images/carnes/maminhabovino.jpg" },
    
    
    { id: 23, corte: "Mão de Vaca", preco: 1375, categoria: "Bovinos",image:"../assets/images/carnes/maodevaca.jpg" },
    { id: 24, corte: "Osso Buco", preco: 5470, categoria: "Bovinos" ,image:"../assets/images/carnes/ossobuco.png"},
    { id: 25, corte: "Osso para Sopa", preco: 1130, categoria: "Bovinos",image:"../assets/images/carnes/ossoparasopa.jpg" },
    { id: 26, corte: "Pá", preco: 6150, categoria: "Bovinos",image:"../assets/images/carnes/pa.png" },
    { id: 27, corte: "Peito Alto", preco: 4800, categoria: "Bovinos" ,image:"../assets/images/carnes/peitoalto.jpeg"},
    { id: 28, corte: "Picanha", preco: 14030, categoria: "Bovinos",image:"../assets/images/carnes/picanha.jpg" },
    { id: 29, corte: "Pojadouro", preco: 7550, categoria: "Bovinos", image:"../assets/images/carnes/pojadoura.jpg"},
    { id: 30, corte: "Rabadilha", preco: 7550, categorlia: "Bovinos",image:"../assets/images/carnes/rabadilha.webp" },
    { id: 31, corte: "Rabo de Boi", preco: 5770, categoria: "Bovinos" ,image:"../assets/images/carnes/rabodeboi.jpg"},
    { id: 32, corte: "T-Bone", preco: 7900, categoria: "Bovinos" ,image:"../assets/images/carnes/tbone.jpeg"},
    { id: 33, corte: "Tomahawk", preco: 12563, categoria: "Bovinos",image:"../assets/images/carnes/tomahawk.jpg" },
    { id: 34, corte: "Vazia", preco: 11350, categoria: "Bovinos",image:"../assets/images/carnes/vazia.jpg"},
    { id: 35, corte: "Barriga", preco: 4918, categoria: "Suínos",image:"../assets/images/carnes/barrigasuina.jpg" },
    { id: 36, corte: "Bifana/Febras", preco: 4679, categoria: "Suínos",image:"../assets/images/carnes/bifanas.jpg" },
    { id: 37, corte: "Bochecha", preco: 4427, categoria: "Suínos",image:"../assets/images/carnes/bochechas.jpg"  },
    { id: 38, corte: "Cachaço", preco: 4978, categoria: "Suínos" ,image:"../assets/images/carnes/cacho.jpg"},
    { id: 39, corte: "Cabeça", preco: 2018, categoria: "Suínos",image:"../assets/images/carnes/cabecasuino.png" },
    { id: 40, corte: "Carne Picada", preco: 4401, categoria: "Suínos",image:"../assets/images/carnes/picadasuino.jpeg" },
    { id: 41, corte: "Chispe", preco: 3575, categoria: "Suínos",image:"../assets/images/carnes/chispe.jpg" },
    { id: 42, corte: "Costela de Lombo", preco: 4428, categoria: "Suínos",image:"../assets/images/carnes/costelasuina.jpg" },
    { id: 43, corte: "Costeleta de Cachaço", preco: 4428, categoria: "Suínos" ,image:"../assets/images/carnes/costelacachoc.jpg" },
    { id: 44, corte: "Entrecosto", preco: 6416, categoria: "Suínos",image:"../assets/images/carnes/entercoste.png" },
    { id: 45, corte: "Entremeada", preco: 5618, categoria: "Suínos",image:"../assets/images/carnes/entremeadasuino.jpg" },
    { id: 46, corte: "Espetada", preco: 6634, categoria: "Suínos",image:"../assets/images/carnes/espetada.jpg" },
    { id: 47, corte: "Gordura", preco: 893, categoria: "Suínos",image:"../assets/images/carnes/banha.jpg" },
    { id: 48, corte: "Guisado(Rojões)", preco: 4278, categoria: "Suínos",image:"../assets/images/carnes/rojoes.jpeg" },
    { id: 49, corte: "Hambúrguer", preco: 4981, categoria: "Suínos",image:"../assets/images/carnes/hamburgersuino.jpg" },
    { id: 50, corte: "Kit Feijoada", preco: 2953, categoria: "Suínos",image:"../assets/images/carnes/kitfeijoadasuino.jpg" },
    { id: 51, corte: "Lombinho", preco: 6031, categoria: "Suínos",image:"../assets/images/carnes/lombinhosuino.jpg" },
    { id: 52, corte: "Lombo para Assar", preco: 6018, categoria: "Suínos",image:"../assets/images/carnes/lomboassar.jpg" },
    { id: 53, corte: "Orelhas", preco: 4008, categoria: "Suínos",image:"../assets/images/carnes/orelha_de_porco.png"},
    { id: 54, corte: "Pá", preco: 4426, categoria: "Suínos",image:"../assets/images/carnes/pasuinos.jpeg"},
    { id: 55, corte: "Pernil", preco: 4427, categoria: "Suínos",image:"../assets/images/carnes/pernil.jpeg" },
    { id: 56, corte: "Piano", preco: 7518, categoria: "Suínos",image:"../assets/images/carnes/piano.jpg" },
    { id: 57, corte: "Ponta do Entrecosto", preco: 4214, categoria: "Suínos",image:"../assets/images/carnes/pontasuino.jpg"  },
    { id: 58, corte: "Rabo", preco: 3095, categoria: "Suínos",image:"../assets/images/carnes/rabosuinos.jpg" },
    { id: 59, corte: "Secretos", preco: 6008, categoria: "Suínos",image:"../assets/images/carnes/secretossuino.jpg"  },
    { id: 60, corte: "T-Bone", preco: 4653, categoria: "Suínos" ,image:"../assets/images/carnes/tbonesuinos.jpeg"},
    { id: 61, corte: "Tomahawk", preco: 7006, categoria: "Suínos",image:"../assets/images/carnes/tomahawksuino.jpg" },
    { id: 62, corte: "Leitão Inteiro", preco: 33000, categoria: "Suínos",image:"../assets/images/carnes/Leitao.png"  },
    { id: 63, corte: "Meio Leitão", preco: 19000, categoria: "Suínos",image:"../assets/images/carnes/meioleitao.jpg" },
    
    { id: 65, corte: "Bife de Frango", preco: 7859, categoria: "Aves",image:"../assets/images/carnes/bife-de-frango.png" },
    {
      id: 66,
      corte: "Bife de Peito de Frango Panado",
      preco: 8958,
      categoria: "Aves"
      ,image:"../assets/images/carnes/Bife-de-Peito-de-Frango-kg.jpg"
    },
    {
      id: 67,
      corte: "Bife de Peito de Frango Recheado",
      preco: 8692,
      categoria: "Aves"
      ,image:"../assets/images/carnes/biferecheado.jpg"
    },
    { id: 68, corte: "Coxa de Frango", preco: 2905, categoria: "Aves"
         ,image:"../assets/images/carnes/coxa-frango-1000x1000.jpg"
    },
    {
      id: 69,
      corte: "Espetada de Peito de Frango",
      preco: 8983,
      categoria: "Aves",
      image:"../assets/images/carnes/espetadafrango.jpg"
    },
    { id: 70, corte: "Frango para Churrasco", preco: 5200, categoria: "Aves",
    image: "../assets/images/carnes/frangochurasco.jpg" },
    
    { id: 71, corte: "Galinha para Cabidela", preco: 4641, categoria: "Aves" ,
      image:"../assets/images/carnes/galinhacabidela.jpg"},
      
    { id: 72, corte: "Nugget de Frango", preco: 3410, categoria: "Aves",
      image:"../assets/images/carnes/80245427-nuggets-de-frango-cru-de-comida-instantânea-já-prontos-para-cozinhar.jpg" },
    { id: 73, corte: "Cabrito Inteiro", preco: 33000, categoria: "Caprinos",
      image:"../assets/images/carnes/cabritointeiro.png" },
    {
      id: 74,
      corte: "Meio cabrito ",
      preco: 19000,
      categoria: "Caprinos",
      image:"../assets/images/carnes/cabritointeiro.png"
    },
    { id: 75, corte: "Caixa Churrasco", preco: 77249, categoria: "Caixas"
    ,
      image:"../assets/images/produtos/IMG-20240425-WA0027.jpg"},
    { id: 76, corte: "Caixa Gulungo", preco: 97798, categoria: "Caixas"
    ,
    image: "../assets/images/produtos/IMG-20240425-WA0027.jpg"},
    { id: 77, corte: "Caixa Kwanza", preco: 70408, categoria: "Caixas" ,
      image:"../assets/images/produtos/IMG-20240425-WA0028.jpg"},
    { id: 78, corte: "Caixa Kalandula", preco: 54108, categoria: "Caixas" ,
    image: "../assets/images/produtos/IMG-20240425-WA0026.jpg"},
    { id: 79, corte: "Caixa Serra da Leba", preco: 42898, categoria: "Caixas",
    image: "../assets/images/produtos/IMG-20240425-WA0024.jpg" },
    { id: 80, corte: "Caixa Kandengue", preco: 42064, categoria: "Caixas" ,
    image: "../assets/images/produtos/IMG-20240425-WA0024.jpg"},
  ]);
  Alpine.store("categorias", [
    { id: 0, active: false, categoria: "Bovinos" },
    { id: 1, active: false, categoria: "Suínos" },
    { id: 2, active: false, categoria: "Aves" },
    { id: 3, active: false, categoria: "Caprinos" },
    { id: 4, active: false, categoria: "Caixas" },
  ]);
  Alpine.store("title", "hello kitty");
});

function CheckCart() {
  var existingCart = localStorage.getItem("cart");
  if (existingCart) {
    Alpine.store("cart", JSON.parse(existingCart));
    const total = getTotal(JSON.parse(existingCart));
    Alpine.store("total", total);
    return JSON.parse(existingCart);
  } else {
    Alpine.store("cart", []);
    Alpine.store("total", 0);
    return [];
  }
}

function AddCart(item) {

  item.qty = 1;

  var cart = CheckCart();
  cart.push(item);
  Alpine.store("cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart(cart) {
  Alpine.store("cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  const total = getTotal(cart);
  Alpine.store("total", total);
}

function getTotal(cart) {
  return cart.reduce((acc, item) => acc + item.preco * item.qty, 0);
}
