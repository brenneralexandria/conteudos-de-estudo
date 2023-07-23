var nota1 = prompt('Digite sua primeira nota');
nota1 = parseFloat(nota1);

var nota2 = prompt('Digite sua segunda nota');
nota2 = parseFloat(nota2);

var media = (nota1 + nota2) /2;

if(media >= 7 && media <= 9) {
    console.log('Você foi aprovado');
}else if(media >= 10) {
    console.log('Você foi aprovado com Distinção!');    
}else {
    console.log('Você foi reprovado, estude mais!');
}