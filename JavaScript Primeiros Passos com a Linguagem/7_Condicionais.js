console.log("Condicionais \n\n")

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

console.log("Destinos Possíveis:")
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true ) {
    listaDeDestinos.splice(1, 1);
    console.log("Boa viagem! \n");
} else {
    console.log("Você não tem idade pra comprar! \n");
}

console.log("Embarcando \n")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem Denovo!")
} else {
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);
