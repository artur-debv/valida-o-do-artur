const peso = [3,2,1,1,1,0,9,8,7,6,5,4,3,2];
const ie = "062307904008";
const ie2 = [];

// Calcula a multiplicação dos dígitos pelos pesos
for (let i = 0; i < 8; i++) {
  ie2.push(parseInt(ie[i]) * peso[i]);
}


const somaProdutos1 = ie2.reduce(function (acumulador, valor) {
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
console.table(ie2)
console.log(digitoVerificador)