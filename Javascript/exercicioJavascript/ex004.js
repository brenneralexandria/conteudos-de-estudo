let trocaTexto = document.getElementById('result');

function calc() {
    let numb = parseInt(prompt('Digite um número'));

    if (numb % 2 === 0) {
        trocaTexto.innerHTML = `<p>O número ${numb} que foi digitado é <strong>PAR</strong></p>`
    } else {
        trocaTexto.innerHTML = `<p>O número ${numb} que foi digitado é <strong>ÍMPAR</strong></p>`
    }
}