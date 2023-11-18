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

// Função para remover um item do carrinho
function removeFromCart(cartItem, productId) {
    
    // Remove o item do carrinho
    const index = productId;

    console.log(cart.length)
    
    cart.splice(index, 1);
    console.log(cart.length)
    
    // Remove o item da lista HTML
    const cartList = document.getElementById("cart");
    cartList.removeChild(cartItem.element);

    // Atualiza a exibição do carrinho e o total
    updateCartDisplay();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    const totalDisplay = document.getElementById("total");
    const numberCard = document.getElementById("cartNumber");

    console.log(cart.length)
    numberCard.innerHTML = cart.length;
    

    // Limpar a exibição atual do carrinho
    // cartList.innerHTML = "";

    // Adicionar cada item do carrinho à lista
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - ${item.preco.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Atualizar o total
    totalDisplay.textContent = total.toFixed(2);
}

// Adiciona um event listener para adicionar produtos ao carrinho
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonchange")) {
        const productId = event.target.id;
        const produto = vendas.produtos[productId];
        addToCart(produto);
    }

    if(event.target.classList.contains("buttonremove")) {
        const productId = event.target.id;
        const produto = vendas.produtos[productId];
        removeFromCart(produto, productId)
    }
});

// Cria e adiciona o botão de remoção aos itens do carrinho
const removeButton = document.createElement('buttonremove');
removeButton.textContent = 'Remove';
removeButton.addEventListener('click', () => {
    removeFromCart(resultItem); // Remove o item da lista ao clicar no botão de remoção
});
resultItem.appendChild(removeButton);

// Inicializa a exibição de produtos
vendas.exibirProdutosNoHTML();
