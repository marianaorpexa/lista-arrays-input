// Encontrar o num 10 no array
// resposta o indice
// caso nao exista imprimir -1

const numeros = [54, 22, 14, 87, 10, 284];

let resposta = -1;
for (i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 10) {
        resposta = i;
        break;

    }

}
console.log(resposta);








