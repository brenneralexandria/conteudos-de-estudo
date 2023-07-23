function checaLetra() {
    var Letra = document.getElementById("char").value;
    Letra = Letra.toLowerCase();

    if(Letra == 'a' || Letra == 'e' || Letra == 'i' || Letra =='o' || Letra == 'u') {
        alert("A letra " + Letra + " é vogal");
    } else {
        alert("A letra " + Letra + " é consoante");
    }   
}