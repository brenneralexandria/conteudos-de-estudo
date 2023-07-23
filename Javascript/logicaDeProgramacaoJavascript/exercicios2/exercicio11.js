/*11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e 
 se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7. */

let aluno = prompt('Qual o seu nome?');

let nota1 = parseFloat(prompt('Digite sua primeira nota'));
let nota2 = parseFloat(prompt('Digite sua segunda nota'));
let nota3 = parseFloat(prompt('Digite sua terceira nota'));
let nota4 = parseFloat(prompt('Digite sua quarta nota'));

let media = (nota1 + nota2 + nota3 + nota4)/4

if(media >= 7) {
    alert('Parabéns ' + aluno + ', você foi aprovado com a média ' + media);
}else {
    alert('Estude mais, você foi reprovado. Sua média foi: ' + media);
}