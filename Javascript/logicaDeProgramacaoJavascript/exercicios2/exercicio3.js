/*3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores,
caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
imprimir seu valor na tela. */

let A = prompt('digite um número');
let B = prompt('digite um número');

A = parseInt(A);
B = parseInt(B);

let C;

if(A === B) {
    C = A + B;
    alert('O resultado da soma é ' + C);
}else {
    C = A * B;
    alert('O resultado da multiplicação é ' + C);
}