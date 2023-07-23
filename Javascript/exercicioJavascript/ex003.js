let trocarTexto = document.getElementById('result');

function calcMedia() {
    let name = prompt("Qual o nome do aluno?");

    let nota1 = parseFloat(prompt("Qual foi a primeira nota de " + name));
    let nota2 = parseFloat(prompt("Além de " + nota1 + ", qual foi a outra nota de " + name));

    let med = (nota1 + nota2)/2

    let msg

    if(med >= 6) {
        msg = 'Você foi aprovado!'
    } else {
        msg = 'Estude mais, você foi reprovado!'
    }

    trocarTexto.innerHTML = `<p>Calculando a média final de <mark>${name}</mark></p>`
    trocarTexto.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    trocarTexto.innerHTML += `<p>A média final é: <mark>${med}</mark></p>`
    trocarTexto.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}