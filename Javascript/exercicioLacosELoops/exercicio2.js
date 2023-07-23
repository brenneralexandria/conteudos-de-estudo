function Entrar() {

digiteNome = prompt("digite seu nome");
digiteSenha = prompt("digite sua senha");

    while(digiteNome, digiteSenha) {
       if(digiteNome !== digiteSenha) {
        console.log("Login Efetuado")
       }else {
            console.log("Sua senha não pode ser igual ao nome");
       }
       break;
    }  
}