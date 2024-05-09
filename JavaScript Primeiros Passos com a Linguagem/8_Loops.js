console.log("\nTrabalhando com Loops\n")

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destinoDesejado = "Salvador"

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

console.log("DESTINOS POSSÍVEIS")
console.log(listaDeDestinos,"\n")


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

if (podeComprar){
    temPassagemComprada = true;
    console.log("Boa viagem!\n");
} else {
    temPassagemComprada = false;
    console.log("Você não pode comprar!\n");
}


let destinoExiste = false;
// let contador = 0;

// while (contador < 3){
//     if (listaDeDestinos[contador] == destinoDesejado){
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

for(let contador = 0 ; contador<3 ; contador++){
    if (listaDeDestinos[contador] == destinoDesejado){
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa viagem!");
} else {
    console.log("Desculpe tivemos um erro.");
};




// console.log("EMBARCANDO\n");
// if(idadeComprador >= 18 && temPassagemComprada){
//     console.log("Boa Viagem Denovo!");
// } else {
//     console.log("Você não pode embarcar.");
// };