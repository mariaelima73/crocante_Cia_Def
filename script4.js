//Mudança de imagem no footer 

function trocarImagem() {
    // Verifica a largura da tela
    var largura = window.screen.width;
    // Se a largura da tela for menor que 600 pixels, troca a imagem
    if (largura < 600) {
        document.getElementById('img-footer').src = 'imagens/footer2.png';
    } else {
        document.getElementById('img-footer').src = 'imagens/footer.png';
    }
}
// Chama a função trocarImagem quando o tamanho da tela é alterado
window.addEventListener('resize', trocarImagem);

//----------------------------------------------------------
