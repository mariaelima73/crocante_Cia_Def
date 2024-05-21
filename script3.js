//Total 0.00 quando iniciar
let totalGeral = 0

//Clicar no botao Adicionar ao Carrinho
window.addEventListener('message', function(event) {
    const product = event.data;
    if (product && product.name && product.price && product.image) {
        const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
        let existingRow = Array.from(cart.getElementsByTagName('tr')).find(row => {
            return row.querySelector('td[data-name]').getAttribute('data-name') === product.name;
        });

    if (existingRow) {
            // Incrementar a quantidade do produto existente
            let quantityInput = existingRow.querySelector('input[type="number"]');
            quantityInput.value = parseInt(quantityInput.value) + 1;
            var totalProduct = (product.price * quantityInput.value);
            existingRow.querySelector('.total-product').textContent = `R$${totalProduct.toFixed(2).replace('.', ',')}`;

        } else {
            // Criar uma nova linha com o produto clicado
            const row = document.createElement('tr');

            const cellImage = document.createElement('td');
            cellImage.style.backgroundImage = `url(${product.image})`;
            cellImage.className = "imagem-cart"
            row.appendChild(cellImage);

            const cellName = document.createElement('td');
            cellName.setAttribute('data-name', product.name);
            cellName.textContent = product.name;
            row.appendChild(cellName);

            const cellPrice = document.createElement('td');
            cellPrice.textContent = `R$${product.price.toFixed(2).replace('.', ',')}`;
            row.appendChild(cellPrice);

            const cellQuantity = document.createElement('td');
            const quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.value = 1;
            quantityInput.min = 1;
            cellQuantity.appendChild(quantityInput);
            row.appendChild(cellQuantity);

            const cellTPreco = document.createElement('td');
            var totalProduct = product.price;
            cellTPreco.textContent = `R$${totalProduct.toFixed(2).replace('.', ',')}`;
            cellTPreco.classList.add('total-product');
            row.appendChild(cellTPreco);

            const cellRemove = document.createElement('td');
            const butRemove = document.createElement('button');
            butRemove.innerHTML = "Remover"
            butRemove.className = "remove-button";
            cellRemove.appendChild(butRemove);
            row.appendChild(cellRemove);

            cart.appendChild(row);

            //Atualiza o totalGeral depois de adicionar o produto
            totalGeral += product.price

            butRemove.onclick = function() {
                cart.removeChild(row);
                // Atualizar o total geral após remover o produto
                updateTotalGeral();
            };

            quantityInput.oninput = function() {
                var novaQuantidade = parseInt(quantityInput.value);
                if (novaQuantidade < 1) {
                    novaQuantidade = 1;
                    quantityInput.value = 1;
                }
                var novoTotalProduto = product.price * novaQuantidade;
                cellTPreco.textContent = `R$${novoTotalProduto.toFixed(2).replace('.', ',')}`;

                // Atualizar o total geral ao alterar a quantidade
                updateTotalGeral();
            };
        }

        // Atualizar a exibição do total geral
        updateTotalGeral();
    }
});
// Função para atualizar a exibição do total geral
function updateTotalGeral() {
    const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
    let totalGeral = 0;
    Array.from(cart.getElementsByTagName('tr')).forEach(row => {
        const quantityInput = row.querySelector('input[type="number"]');
        const priceText = row.querySelector('td:nth-child(3)').textContent.replace('R$', '').replace(',', '.');
        const price = parseFloat(priceText);
        const quantity = parseInt(quantityInput.value);
        totalGeral += price * quantity;
    });

    const totalElement = document.getElementById('total-geral');
    if (totalElement) {
        totalElement.innerHTML = `<strong>Total dos Itens: R$${totalGeral.toFixed(2).replace('.', ',')}</strong>`;
    }
}

window.addEventListener('message', function(event) {
    // Verifica se a mensagem recebida é para rolar para o final
    if (event.data === 'button-buy-now') {
        // Rola para o final da página
        window.scrollTo(0, document.body.scrollHeight);
    }
});

// Função para limpar o carrinho
function limparCarrinho() {
    const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    updateTotalGeral();
}

//Finalizar Compra
var finalizarCompra = document.querySelector('.purchase-button')
finalizarCompra.addEventListener('click', function() {
    //vai pegar todas as opções de pagamento
    var opcoesPay = document.getElementsByName('opção_payment')

    //vai conferir qual opção esta selecionada
    var opcaoSelect
    opcoesPay.forEach(function(opcao){
        if (opcao.checked){
            //e da o valor a variavel criada
            opcaoSelect = opcao.value
        }

    // Verifica se o carrinho está vazio
    if ((opcaoSelect === 'pix') || (opcaoSelect === 'boleto') || (opcaoSelect === 'cartão')) {
        var orderNumber = Math.floor(100 + Math.random() * 900);
        alert(`Sua compra foi finalizada, seu pedido é o número ${orderNumber}. Agradecemos a preferência e aguardamos o seu retorno.`);
        limparCarrinho()
    }
})
})