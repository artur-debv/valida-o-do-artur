// primeiro cálculo

const peso = [9,8,7,6,5,4,3,2];
const ie = "24000004";



for (let i = 0; i < 8; i++) {
  ie.push(parseInt(ie[i]) * peso[i]);
}


const somaProdutos = ie.reduce(function (acumulador, valor) {
  return acumulador + valor;
}, 0);


const produto = somaProdutos * 10
const resto = produto % 11;


if (resto === 10) {
    digitoVerificador = 0;
  } else {
    digitoVerificador = resto;
  }

  console.log('indice é',ie[8])

  
  
  
