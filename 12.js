// O limite para a filaDeDentro deverá ser 5 pessoas.
// imprima todos os elementos da filaDeDentro 
// imprima todos os elementos da filaDeFora
// existam 3 pessoas na fila de dentro e 4 pessoas na fila de fora:




const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// verifique quantas pessoas tem a filaDeDentro

while (filaDeDentro.length < 5) {
    const primeiroDeFora = filaDeFora.shift();
    filaDeDentro.push(primeiroDeFora);

}
console.log(filaDeDentro);
console.log(filaDeFora);
