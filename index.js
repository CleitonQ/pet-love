var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    duvida.querySelector('h3').addEventListener('click', function () {
        duvida.classList.toggle('ativa');
        const paragrafo = duvida.querySelector('.paragrafo');
        if (duvida.classList.contains('ativa')) {
            paragrafo.style.height = 'fit-content';
            paragrafo.style.opacity = '1';
            paragrafo.style.padding = '24px';
        } else {
            paragrafo.style.height = '0';
            paragrafo.style.opacity = '0';
            paragrafo.style.padding = '0';
        }
    });
});