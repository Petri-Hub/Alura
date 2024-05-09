const listaClientes = () => {
    //A função fetch, da fetchAPI realiza um GET da URL feita, realizando um Promise e devolvendo uma resposta
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possível listar os clientes')
        }
    })
}

const criaCliente = (nome, email) => {
    //Criando outra requisição, dessa vez passando como parâmetro da função fetch, o método que queremos utilizar, nesse caso, o POST
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        //E por último dizendo qual é o tipo de dado que estamos passando / É COM S NO FINAL -> HEADERS
        headers: {
            'Content-Type': 'application/json'
        },
        //Passando os dados (Lembrando que devem ser em texto)
        body: JSON.stringify({ 
            nome: nome,
            email: email 
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        } else {
            throw new Error('Não foi possível criar o cliente')
        }
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remvoer o cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possível detalhar o cliente')
        }
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possível detalhar o cliente')
        }
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deletaCliente,
    detalhaCliente,
    atualizaCliente
}
