/*8 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.*/

let a = parseInt(prompt("DIGITE UM NÚMERO"));
let b = parseInt(prompt("DIGITE OUTRO NÚMERO"));
let c = parseInt(prompt("DIGITE MAIS UM NÚMERO"));

let maior, meio, menor

if(a > b && a > c) {
    maior = a
    if(b > c){
        menor = c
        meio = b
    }else {
        menor = b
        meio = c
    }
}else if(a < b && a < c) {
    menor = a
    if(b > c){
        maior = b
        meio = c
    }else {
        maior = c
        meio = b
    }
}else {
    meio = a
    if(b > c) {
        maior = b
        menor = c
    }
}

console.log(maior, meio, menor);