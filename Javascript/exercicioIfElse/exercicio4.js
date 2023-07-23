function trocarValor() {
var n1 = parseInt(document.getElementById("numero1").value);
var n2 = parseInt(document.getElementById("numero2").value);

var aux = n1;

n1 = n2;
n2 = aux;

alert("Antes:\n"+
"Primeiro Número = "+document.getElementById("numero1").value+"\n"+
"Segundo Número = "+document.getElementById("numero2").value+"\n"+
"\n"+
"Invertido:\n"+
"Primeiro Número = " + n1+"\n"+
"Segundo Número = " + n2+"\n\n");
}