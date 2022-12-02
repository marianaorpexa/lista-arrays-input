//  novo array com núm  que estejam entre 10 e 20,incluindo eles. ok
//  ou que sejam maiores que 100. ok
//  imprima a variável que guarda o novo array.

const original = [5, 7, 13, 17, 26, 34, 118, 245];


arrayFiltrados = [];

for (numero of original) {
    if ((numero >=
        10 && numero <= 20) || numero > 100) {
        arrayFiltrados.push(numero);
    }
}

console.log(arrayFiltrados);