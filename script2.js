//Voltar ao topo do index
const botaoVoltarAoTopo = document.getElementById('voltarAoTopo')

botaoVoltarAoTopo.addEventListener('click', () => {
    scrollTo({top: 0, behavior: 'smooth'})
})

addEventListener('scroll', () => {
    if (scrollY > 100) {
        botaoVoltarAoTopo.style.display = 'block';
    } else {
        botaoVoltarAoTopo.style.display = 'none';
    }
})

// Função para mostrar slides de um carrossel específico
function showSlides(carouselId, slideIndex) {
    var slides = document.querySelectorAll('#' + carouselId + ' .slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(function() { showSlides(carouselId, slideIndex); }, 2000);
}

// Inicializar todos os carrosseis
function initCarousels() {
    showSlides("carousel1", 0);
    showSlides("carousel2", 0);
    showSlides("carousel3", 0);
    showSlides("carousel4", 0);
}

// Iniciar a função quando a página for carregada
window.onload = initCarousels;