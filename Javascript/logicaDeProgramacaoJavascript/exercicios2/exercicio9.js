/*9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição 
de acordo com a tabela abaixo:

Fórmula do IMC = peso / (altura) ²

Tabela Condições IMC
  
 Abaixo de 18,5   | Abaixo do peso          
 Entre 18,6 e 24,9 | Peso ideal (parabéns)  
 Entre 25,0 e 29,9 | Levemente acima do peso
 Entre 30,0 e 34,9 | Obesidade grau I 
 Entre 35,0 e 39,9 | Obesidade grau II (severa)
 Maior ou igual a 40 | Obesidade grau III (mórbida) */


let peso = parseFloat(prompt('Digite seu peso'));
let altura = parseFloat(prompt('Digite sua altura'));

let imc = peso / (Math.pow(altura, 2))

if(imc < 19) {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está abaixo do peso');
}else if(imc >= 19 && imc <= 25) {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está com o peso ideal');
}else if(imc >= 26 && imc <= 30) {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está levemente acima do peso');
}else if (imc >= 30 && imc <= 35) {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está com obesidade grau I'); 
}else if (imc >= 36 && imc <= 40) {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está com obesidade grau II');
}else {
    alert('Seu IMC é: ' + Math.round(imc) + '%' + ' você está com obesidade grau III');
}