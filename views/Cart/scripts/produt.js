// Defina a classe Produto
class Produto {
    constructor(nome, marca, preco, nomearquivoimagem) {
      this.nome = nome;
      this.marca = marca;
      this.preco = preco;
      this.nomearquivoimagem = nomearquivoimagem;
    }
  }


  // Crie instâncias de produtos
  const produto1 = new Produto("boardshort musgo", "sieg", 115, "./img/produto1.jpg");
  const produto2 = new Produto("boardshort black carmel", "sieg", 115, "./img/produto 2.jpg");
  const produto3 = new Produto("boardshort green pink", "sieg", 115, "./img/produto 3.jpg");
  const produto4 = new Produto("camiseta essencial branca", "sieg", 115, "./img/produto 4.jpg");
  const produto5 = new Produto("camiseta victory platinum", "sieg", 115, "./img/produto 5.jpg");
  const produto6 = new Produto("ragata victory preta", "sieg", 115, "./img/produto 6.jpg");
  const produto7 = new Produto("ragata war mustard", "sieg", 115, "./img/produto 7.jpg");
  const produto8 = new Produto("camiseta essencial verde militar", "sieg", 115, "./img/produto 8.jpg");
  const produto9 = new Produto("boardshort retrô old pink", "sieg", 115, "./img/produto 9.jpg");
  const produto10 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 10.jpg");
  const produtof1 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F1.jpg");
  const produtof2 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F2.jpg");
  const produtof3 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F3.jpg");
  const produtof4 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F4.jpg");
  const produtof5 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F5.jpg");
  const produtof6 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F6.jpg");
  const produtof7 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F7.jpg");
  const produtof8 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F8.jpg");
  const produtof9 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F9.jpg");
  const produtof10 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F10.jpg");
  const produtof11 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F11.jpg");
  const produtof12 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F12.jpg");
  const produtof13 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F13.jpg");
  const produtof14 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto F14.jpg");
  const produto11 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 11.jpg");
  const produto12 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 12.jpg");
  const produto13 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 13.jpg");
  const produto14 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 14.jpg");
  const produto15 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 15.jpg");
  const produto16 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 16.jpg");
  const produto17 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 17.jpg");
  const produto18 = new Produto("boardshort retrô camuflado snow", "sieg", 115, "./img/produto 18.jpg");

  
  
  // Defina a classe Vendas
  class Vendas {
    constructor() {
      // Inicialize a matriz de produtos
      this.produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produtof1,produtof2,produtof3,produtof4,produtof5,produtof6,produtof7,produtof8,produtof9,produtof10,produtof11,produtof12,produtof13,produtof14,produto11,produto12,produto13,produto14,produto15,produto16,produto17,produto18];
    }
  
    // Exiba os produtos no HTML
    exibirProdutosNoHTML() {
      const container = document.getElementById("produtos-container");
  
      // Limpe o conteúdo existente no container
      container.innerHTML = "";

      // Agora você pode adicionar novos elementos ao "container" sem duplicar o conteúdo anterior
  
      // Itere sobre os produtos e crie elementos HTML para cada um
      this.produtos.forEach((produto, index) => {
        const cardElement = document.createElement("div");
        const cardDescription = `description-contatiner`
        cardElement.id = `${index + 1}`;
        cardElement.innerHTML = `
          <img src="${produto.nomearquivoimagem}" alt="${produto.nome}" class="imageChange">
          <div class="${cardDescription}">
            <p>${produto.nome}</p>
            <p>${produto.marca}</p>
            <p>${produto.preco}</p>
            <div class="buttondescription">
             <button class="buttonchange" id="${cardElement.id}">adicionar</button>
             <button class="buttonremove" id="${cardElement.id}">remover</button
            </div
          </div>
        `;
  
        // Adicione o card de produto ao container
        container.appendChild(cardElement);
     
      });
    }
  }
  
  // Crie uma instância da classe Vendas
  const vendas = new Vendas();
  
  // Chame o método para exibir os produtos no HTML
  vendas.exibirProdutosNoHTML();
  