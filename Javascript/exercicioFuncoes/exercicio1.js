const alunos = [
    {
        nome: 'joão',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Robert',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Buda',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Brenner',
        nota: 3,
        turma: '1B'
    }
];

function alunosAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));