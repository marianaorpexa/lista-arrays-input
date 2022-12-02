// a) Adicione um novo pedido "pedido 15" ao final da fila. OK
// b) Retire o primeiro pedido "pedido 12" da fila.
// c) Imprima no console a filaDePedidos
// Ao final, deverá ser impresso no console:
// ["pedido 13", "pedido 14", "pedido 15"];


const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

filaDePedidos.push("pedido 15");
filaDePedidos.shift();


console.log(filaDePedidos);
