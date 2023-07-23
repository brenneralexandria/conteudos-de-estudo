// transfomDegreet("50F")

function transfomDegreet(degree) {
    const celsius = degree.toUpperCase().includes('C')
    const fahrenheit = degree.toLowerCase().includes('F')

    if(!celsius && fahrenheit) {
        throw new Error('Grau não identificado')
    }

    // fluxo de fahrenheit para celsius
    let updateDegree = Number(degree.toUpperCase().replace('F',''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    return formula(updateDegree) + degreeSing
}

    try {
        console.log(transfomDegreet("90F"))
       // console.log(transfomDegreet("100z"))
}   catch (error) {
    console.log(error)
}