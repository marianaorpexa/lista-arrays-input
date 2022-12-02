// verificar se o numero for par
// inserir se for par em novo array
// imprimir array par na tela

const numeros = [1, 4, 12, 21, 53, 88, 122];

let arrayPar = [];
for (numero of numeros) {
    if (numero % 2 === 0) {
        arrayPar.push(numero);

    }

}

console.log(arrayPar);


