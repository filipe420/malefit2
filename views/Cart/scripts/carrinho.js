// Variáveis globais
const cart = [];
let total = 0;

// Função para adicionar um item ao carrinho
function addToCart(produto) {
    cart.push(produto);
    // total += produto.preco;

    // Atualizar a exibição do carrinho e o total
    updateCartDisplay();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    const totalDisplay = document.getElementById("total");
    const numberCard = document.getElementById("cartNumber")

    numberCard.innerHTML = cart.length

    // Limpar a exibição atual do carrinho
    cartList.innerHTML = "";

    // Adicionar cada item do carrinho à lista
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - ${item.preco.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Atualizar o total
    totalDisplay.textContent = total.toFixed(2);
}

// Adicione um event listener para adicionar produtos ao carrinho
document.addEventListener("click", function (event) {
    console.info("evento")
    if (event.target.classList.contains("buttonchange")) {
        const productId = event.target.dataset.productId;
        const produto = vendas.produtos[productId];
        addToCart(produto);
    }
});

// Inicialize a exibição de produtos
vendas.exibirProdutosNoHTML();

