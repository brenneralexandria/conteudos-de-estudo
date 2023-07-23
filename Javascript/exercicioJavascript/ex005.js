let trocaTexto = document.getElementById('result');

function calc() {
    let numb1 = parseInt(prompt('Digite um número'));
    let numb2 = parseInt(prompt('Digite outro número'));

    if (numb1 > numb2) {
        trocaTexto.innerHTML = `<p>Analisando os valores <mark>${numb1}</mark> e <mark>${numb2}</mark>, o maior valor é <strong>${numb1}</strong></p>`
    } else {
        trocaTexto.innerHTML = `<p>Analisando os valores <mark>${numb1}</mark> e <mark>${numb2}</mark>, o maior valor é <strong>${numb2}</strong></p>`
    }
}