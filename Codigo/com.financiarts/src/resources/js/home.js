const header = document.querySelector("header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {


    if (window.scrollY >= navHeight) {

        header.classList.add('scroll')

    } else {
        header.classList.remove('scroll')

    }
};
//Cursos em slider
const swiper = new Swiper('.swiper', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,

});


//ScrolReveal: Mostrar elementos quando der scroll na pagina 

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: false
});


scrollReveal.reveal(
    `#primeira-parte .wallpaper, #primeira-parte .informacoes,
    #terceira-parte .wallpaper-2, #terceira-parte .informacoes-2,
    #quarta-parte .informacoes-3, #quarta-parte .fotos-3,
    #sexta-parte .wallpaper-3, #sexta-parte .informacoes-3,
    #setima-parte .container-carrosel, #setima-parte .slides swiper-wrapper,
    #oitava-parte .wallpaper-7, #oitava-parte .informacoes-7,
    #nona-parte h1, #nona-parte .card-noticia,
    footer .flex-footer, footer .endereco,
    footer .collum, footer .rede-social, footer .caixa-logos,
    footer .telefone`,

    { interval: 200 },

);





window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
});