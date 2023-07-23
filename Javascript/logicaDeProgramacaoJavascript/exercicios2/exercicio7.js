/*7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.*/

let numb1 = prompt('Digite um número');
let numb2 = prompt('Digite outro número');

numb1 = parseFloat(numb1);
numb2 = parseFloat(numb2);

if (numb1 != numb2) {
    alert('False');
} else {
    alert('True');
}