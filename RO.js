let inscricao = "101.62521-3";

const inscricaoSlice = inscricao.slice(3, 8); 


const peso = [6,5,4,3,2];
const ie = [];

for (let i = 0; i < 5; i++) {
    ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
}

const somaProdutos = ie.reduce(function (acumulador, valor) {
    return acumulador + valor;
}, 0);

const resto = somaProdutos % 11;

let digitoVerificador;
if (resto === 10 || resto === 11) {
    digitoVerificador = 0;
} else {
    digitoVerificador = 11 - resto;
}

console.table(ie)
console.log(somaProdutos)
console.log(resto)
console.log(digitoVerificador)
