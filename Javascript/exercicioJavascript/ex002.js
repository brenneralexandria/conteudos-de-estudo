let contador = 0;
let trocarTexto = document.getElementById('result');

function contar() {
    contador ++
    trocarTexto.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function diminuir() {
    contador --
    trocarTexto.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    trocarTexto.innerHTML = null;
}