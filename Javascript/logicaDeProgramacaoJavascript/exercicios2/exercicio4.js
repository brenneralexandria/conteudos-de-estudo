/* 4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor. */

let numb = prompt('Digite um número');
numb = parseInt(numb);

let antecessor = numb - 1;
let sucessor = numb + 1;

if(numb) {
    alert('O número antecessor de ' + numb + ' é: ' + antecessor + ' e o sucessor de ' + numb + ' é: ' + sucessor);
}