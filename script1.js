//INÍCIO JAVASCRIPT
//------------------------------------------------------------
// Do index para menu
function redirecionar(iframeId) {
    // Redireciona para 2.html com o parâmetro do iframe que deve ser visível
    window.location.href = `menu.html?iframe=${iframeId}`;
}

//-----------------------------------------------------------
// Função para obter o valor de um parâmetro específico da URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para ajustar a visibilidade dos iframes com base no parâmetro da URL
function ajustarVisibilidadeIframes() {
    const iframeId = getParameterByName('iframe');
    if (iframeId) {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.classList.remove('visible');
        });
        const iframeParaMostrar = document.getElementById(iframeId);
        if (iframeParaMostrar) {
            iframeParaMostrar.classList.add('visible');
        }
    }
}

// Chama a função ao carregar a página
window.onload = ajustarVisibilidadeIframes;

//----------------------------------------------------------------------------

//Rodando html dentro do html - iframe
var catPaes2 = document.getElementById('catPaes2')
var pagpa = document.getElementById('iframe1')
var catDoces2 = document.getElementById('catDoces')
var pagdc = document.getElementById('iframe2')
var catSalg2 = document.getElementById('catSalg')
var pagsl = document.getElementById('iframe3')
var catBeb2 = document.getElementById('catBeb')
var pagbb = document.getElementById('iframe4')


function clicarPaes() {

    pagpa.src = 'paes.html';
    document.getElementById('iframe1').style.display = 'block';
    document.getElementById('iframe2').style.display = 'none';
    document.getElementById('iframe3').style.display = 'none';
    document.getElementById('iframe4').style.display = 'none';
}

   function clicarDoces() {

    pagdc.src = 'doces.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'block'
    document.getElementById('iframe3').style.display = 'none'
    document.getElementById('iframe4').style.display = 'none'
   }
   
   function clicarSalgados() {

    pagsl.src = 'salgados.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'none'
    document.getElementById('iframe3').style.display = 'block'
    document.getElementById('iframe4').style.display = 'none'
   }

   function clicarBebidas() {
    
    pagbb.src = 'bebidas.html'
    document.getElementById('iframe1').style.display = 'none'
    document.getElementById('iframe2').style.display = 'none'
    document.getElementById('iframe3').style.display = 'none'
    document.getElementById('iframe4').style.display = 'block'
   }