// calcule a maior diferença entre dois números desse array.
// 8 - 11; 8- 4; 8 - 1; um loop dentro do outro

const numeros = [8, 11, 4, 1];

let maiorDiferenca = Number.MIN_VALUE;
for (let x of numeros) {
    for (let y of numeros) {
        if (x - y > maiorDiferenca) {
            maiorDiferenca = x - y;

        }

    }
}
console.log(maiorDiferenca);
