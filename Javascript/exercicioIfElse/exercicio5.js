function maiorValor() {

    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var n3 = parseFloat(document.getElementById("numero3").value);

    var maior = n1;

    if(n2 > maior)
        maior = n2;
    if(n3 > maior) 
        maior = n3;
  
    alert("Maior: " + maior);
}

function menorValor() {

    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    var n3 = parseFloat(document.getElementById("numero3").value);

    var menor = n1;

    if(n2 < menor)
        menor = n2;
    if(n3 < menor)
        menor = n3;
  
    alert("Menor: " + menor);
}