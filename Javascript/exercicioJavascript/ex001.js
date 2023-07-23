function clique() {
    let TrocarTexto = window.document.getElementById('trocaTexto');
    let name = prompt("Qual é o nome do aluno?");
    let numb = parseFloat(prompt("Qual foi a primeira nota de " + name));
    let numb2 = parseFloat(prompt("Qual foi a segunda nota de " + name));

    let soma = (numb + numb2)/2;

    TrocarTexto.innerHTML = `<p>Calculando a média final de <mark> ${name}</mark>.</p>`
    TrocarTexto.innerHTML += `<p>As notas obtidas foram <mark> ${numb} e ${numb2}</mark>.</p>`
    TrocarTexto.innerHTML += `<p>A média final foi <mark> ${soma}</mark>.</p>`
}