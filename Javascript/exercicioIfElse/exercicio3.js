var n1 = prompt("Digite o primeiro número");
var n2 = prompt("Digite o segundo número");
var n3 = prompt("Digite o terceiro número");

if(n1 > n2 && n1 > n3) {
    alert("O maior número é: " + n1);
}else if(n2 > n1 && n2 > n3) {
    alert("O maior número é: "  + n2);
}else {
    alert("O maior número é: " + n3);
}