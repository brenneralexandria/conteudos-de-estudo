/* 2 - Faça um algoritmo para receber um número qualquer e imprimir
na tela se o número é par ou ímpar, positivo ou negativo. */

let numb = prompt('Digite um número');
numb = parseFloat(numb);
 
if(numb % 2 === 0 && numb > 0) {
    alert('O número ' + numb + ' é par e positivo');
} else if((numb % 2 === 0 && numb < 0)) {
    alert('O número ' + numb + ' é par e negativo');
} else if(numb % 2 !== 0 && numb > 0) {
    alert('O número ' + numb + ' é impar e positivo');
} else {
    alert('O número ' + numb + ' é impar e negativo');
}