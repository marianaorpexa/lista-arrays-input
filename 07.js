// criar um novo array com nomes de letra a ou A
// imprimir novo array com nomes a ou A

const nomes = ["Ana", "Joana", "Carlos", "amanda", "Andre", "Andrea"];

let arrayNomesComA = [];
for (let nome of nomes) {
    const inicial = nome[0];
    if (inicial === 'a' || inicial === 'A') {
        arrayNomesComA.push(nome);


    }


}
console.log(arrayNomesComA);
