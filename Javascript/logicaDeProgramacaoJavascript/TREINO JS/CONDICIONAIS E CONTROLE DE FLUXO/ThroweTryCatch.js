// throw - Disparar/lançar

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log('depois do erro')
}
// try (Tentar) catch(pegar/capturar)
try {
    sayMyName()
} catch(e) {
    console.log(e)
}