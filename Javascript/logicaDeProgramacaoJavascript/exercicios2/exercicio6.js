/*6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.*/

let valor = prompt('Digite um valor');
valor = parseInt(valor);

let valorPorcentagem = (valor * 5) / 100;

let resultado = valor + valorPorcentagem;

alert(resultado);