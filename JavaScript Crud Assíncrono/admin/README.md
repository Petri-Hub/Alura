abrir a pasta admin no vscode e 
rodar o json server: 
```js
json-server --watch db.json
```

Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html

/----/DUMP DE CÓDIGOS/----------------------------------------------------------------------------------------------------/

    //UTILIZANDO PROMISES COM XML REQUEST
    //Criando Promessa
    const promise = new Promise((resolve, reject) => {

        // Criando e instanciando uma Requisição
        const http = new XMLHttpRequest()

        // Especificado o método da requisição, e a URL alvo
        http.open('GET', 'http://localhost:3000/profile')
    
        //Ao a requisição carregar
        http.onload = () => {
            if (http.status >= 400){
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }

        // Enviando a requisição
        http.send()