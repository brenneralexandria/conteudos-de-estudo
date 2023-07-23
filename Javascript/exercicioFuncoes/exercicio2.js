function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 25,
};
const pessoa2 = {
    nome: 'Brenner',
    idade: 28,
};
const Animal = {
    nome: 'Jack',
    idade: 1,
    raca: 'Pitbull'
};

console.log(calculaIdade.call(pessoa1, 5));