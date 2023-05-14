const btnTema = document.getElementById('botao-alterar-tema');
const body = document.querySelector('body');
const imgBtnTema = document.querySelector('.img-btn');

btnTema.addEventListener('click', function() {
    console.log('Clicado');
    body.classList.toggle('modo-escuro');
    imgBtnTema.setAttribute('src', 'src/imagens/moon.png');

    if (!body.classList.contains('modo-escuro')) {
        imgBtnTema.setAttribute('src', 'src/imagens/sun.png');
    }
});
