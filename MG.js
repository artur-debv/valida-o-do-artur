let inscricao = "0623079040081";

const inscricaoSlice = inscricao.slice(0, 3) + "0" + inscricao.slice(3);

const peso = [1,2,1,2,1,2,1,2,1,2,1,2];
const ie = [];

for (let i = 0; i < 10; i++) {
  ie.push(parseInt(inscricaoSlice[i]) * peso[i]);
}

const somaAlgarismos = ie.reduce((acumulador, valor) => {
  const digitos = valor.toString().split('').map(Number);
  return acumulador + digitos.reduce((a, b) => a + b, 0);
}, 0);

const somaProdutos = (10 - (somaAlgarismos % 10)) % 10;

console.log(somaAlgarismos)
console.table(ie) 
console.log(somaProdutos)



// segundo cálculo
let inscricao1 = "0623079040081";

const peso1 = [3,2,1,1,1,0,9,8,7,6,5,4,3,2];
const ie1 = [];


for (let i = 0; i < 8; i++) {
  ie1.push(parseInt(inscricao1[i]) * peso1[i]);
}


const somaProdutos1 = ie1.reduce(function (acumulador, valor) {
  return acumulador + valor;
}, 0);

const resto = somaProdutos1 % 11;

let digitoVerificador;
if (resto <= 1) {
  digitoVerificador = 0;
} else {
  digitoVerificador = 11 - resto;
}

console.log(resto)
console.table(ie)
console.log(digitoVerificador)

console.log('indice é',inscricao[11])
