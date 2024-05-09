console.log("Trabalhando com listas")

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

// Adicionando um elemento ao final do Array
listaDeDestinos.push("Ilha Bela")

// Removendo itens de um Array com base em sua posição
listaDeDestinos.splice(2, 1);

console.log(listaDeDestinos)
console.log(listaDeDestinos[1])