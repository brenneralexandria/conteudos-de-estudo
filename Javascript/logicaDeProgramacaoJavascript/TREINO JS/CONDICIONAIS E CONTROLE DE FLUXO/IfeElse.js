// if ... Else

let temperature = 36.5

if(temperature >= 37) {
    console.log('Febre')
}
else {
    console.log("Saudável")
}

// caso queira adicionar mais de uma condicional usar o Else If()

let temp = 38

if(temp >= 37.5) {
    console.log('Febre Alta')
}
else if(temp < 37.5 && temp >= 37) {
    console.log("Febre Moderada")
} else {
    console.log('Saudável')
}

