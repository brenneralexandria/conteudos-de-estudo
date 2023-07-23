/* 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida 
imprima na tela a soma entre A e B é mostre se a soma é menor que C. */

let a = prompt('Digite um número');
let b = prompt('Outro número');
let c = prompt('Digite um número para comparação');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

soma = a + b;

if(soma > c) {
    alert('A soma de ' + a + ' e ' + b + ' (' + soma + ')' + ' é maior que C' + ' (' + c + ')');
}else {
    alert('A soma de ' + a + ' e ' + b + ' (' + soma + ')' + ' é menor que C' + ' (' + c + ')');
}
