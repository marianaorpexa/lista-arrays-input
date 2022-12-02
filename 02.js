const letras = ["A", "a", "B", "c", "E", "e"];

let cont = 0;
for (let letra of letras) {
    if (letra === 'e' || letra === 'E') {
        cont++;

    }


}



if (cont === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada');

} else if (cont === 1) {
    console.log('Foi encontrado 1 letra "E" ou "e" ');

} else {
    console.log(`Foram encontradas ${cont} letras "E" ou "e" `);

}


