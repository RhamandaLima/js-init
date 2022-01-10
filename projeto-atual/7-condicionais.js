console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 21;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    //A pessoa é menor de idade
    if (estaAcompanhada == true) {
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1, 1); //removendo item
    } else {
        console.log("Não é maior de idade e não posso vender");
    }
}

console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);