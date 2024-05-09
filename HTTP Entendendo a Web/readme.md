/------/CAPITULO 1/---/O que é HTTP?/-------------------------------------------------------------------------------------/

HTTP = Hypertext Transfer Protocol.

Não é só navegadores que utilizam o protocolo HTTP, será visto isso mais a frente, com Rest.

Proposta do HTTP?
Resposta: Estabelecer regras de comunicação na arquitetura cliente-servidor.

Você já baixou um arquivo torrent utilizando BitTorrent ou algum outro serviço? Saiba que essa comunicação na verdade é uma comunicação P2P! Peer-to-Peer!
Porque?: Isso se deve pois quando precisamos realizar um serviço no modelo cliente-servidor, é geralmente o servidor que realiza o processamento dos dados, do serviço. Porém, quando é necessário realizar um trabalho muito pesado, seja realizar um processo muito grande, a tendência é utilizar P2P, pois essa conexão distruibui o peso entre o cliente e o "servidor".

Arquitetura da Alura:
Cliente  <--- HTTP ---> Servidor Java  <--- SQL ---> Banco de dados

HTTP é o um dos protocolos de communicação mais populares do mundo.

/------/CAPITULO 2/---/HTTPS Por uma web mais segura/---------------------------------------------------------------------/

Um dos problemas do HTTP é que até a requisição do cliente chegar ao servidor, esta requisição passa por diversos outros pontos intermediárias, como roteadores, modens e muito mais coisas, e como o HTTP é um protocolo que transfere dados em forma de texto, isso se torna bem perigoso, pois a chance de seus dados serem consumidos em pontos intermédios maliciosos não são pequenas. Para isso, existe o HTTPS, que fornece uma camada de segurança.

HTTP = Hypertext Transfer Protocol
S = SSL/TLS = Secure Sockets Layer/Transport Layer Security

Para que o browser confie em um site, é necessário a presença de uma identidade, que nada mais é um CERTIFICADO DIGITAL. Esses certifcados são públicos e podem ser vistos por qualquer pessoa que acessa um domínio HTTPS, basta ir na aba de Security dentro da ferramente de desenvolvedor, e clicar em "ver certificado", que mostrará o certificado de identidade.

Esse certificado digital recebe também uma chave de criptografia pública, que serve para criptografar os dados do utilizador (cliente), antes de ser enviado para o servidor, e passar por diversos pontos intermediárias. O servidor por sua vez também recebem uma chave (desta vez, PRIVADA), que serve para que seja possível a descriptografia dos dados enviados pelos clientes. Isto deixa a conexão muito mais segura tanto para o usuário, tanto para o servidor.

HTTPS
-Web segura
-Identidade (Certificado Digital)
-Chaves (Públicas para o cliente, Privada para o servidor)

O nome da criptografia que o protocolo HTTPS utiliza se chama ASSIMETRICO, isso se deve ao fato do cliente possuir uma chave, e o servidor possuir outra, este método garante que os dados criptografados pelo navegador só sejam decifrados com a outra chave que o servidor possuí, a conexão é extremamente segura, porém muito lenta.

Por isso na verdade, o HTTPS utiliza os dois meios de comunicação, o SIMETRICO e o ASSIMETRICO.

Como isso é utilzado então?
Basicamente no início da conexão cliente-servidor, é utilizado o protocolo ASSIMETRICO para que uma chave SIMETRICA seja gerada, para se utilizada agora e em futuros acessos, isso possibilita então uma conexão mais rápida porém ainda segura entre cliente-servidor. Cada cliente possuí uma chave simétrica para se comunicar com o servidor. Por isso é seguro.

/------/CAPITULO 3/---/DNS Endereços sobre seu domínio/-------------------------------------------------------------------/

Quando colocamos a URL de um site no google para acessarmos, aquele URL na verdade não é a chave especial para a realizarmos a comunicação com o servidor, aquilo é nada mais que o "Domain Name" (Nome do domínio). Este "Domain Name", para ser utilizado para fazer uma requisição precisa passar por um serviço, chamado de DNS (Domain Name System). Este serviço funciona de uma forma similar a um banco de dados, na onde armazena o Domain Name de vários sites, e consequentemente seus IPS, que são retornados para o navegador, e por fim realizam uma requisição.

Dessa forma ao entrar em um endereço como https://www.facebook.com, nós primeiros pedimos ao DNS qual o IP desse site, e após o navegador receber este IP (204.15.20.0) ele finalmente faz a requisição. Este processo é bem invisível para o usuário.

Assim como quando pedimos um delivery em um prédio, precisamos ou podemos especificar qual é o número de nosso apartamento, isso também serve para a questão de portas durante as conexões na internet. È como se o servidor fosse o prédio, e cada apartamento um endereço. Lembrando que se utilizarmos uma porta inexistante ao entrar em um endereço web, nós nunca receberemos uma resposta, pois o servidor não está esperando um requisição naquela porta, e por isso, não irá lhe atender.

Porta padrão HTTP = 80
Porta padrão HTTPS = 443

Exemplo de porta durante o URL:
https://facebook.com.br:443
http://casadosezinho.com.br:80

Levando em conta tudo isso, o que é as partes adicionais dentro de nosso link, expostos após o domínio?
EX: https://facebook.com*/page/loveyoumor*
Esta parte, destacada dentro de asteriscos é chamada de CAMINHO, e é um caminho para que possamos buscar um RECURSO em nosso site. Um recuso é algo concreto que podemos buscar.

       https://facebook.com/page/loveyoucia
PROTOCOLO         DOMINIO       CAMINHO p/ RECURSO

/------/CAPITULO 4/---/O cliente pede o servidor responde/----------------------------------------------------------------/

Uma sessão, nada mais que o tempo que um cliente fica ativo perante o servidor. Porém para que iss oseja possível, é necessário além da sessão um Cookie, que armazena dados em forma de texto.

Quando entramos em outra aba de um mesmo site que possui login e senha, enviamos novamente o login e senha para o servidor?
Resposta: Não! Quando uma sessão de login é realizada, geralmente o servidor gerara um ID para o cliente único, geralmente um Hash, e devolverá em forma de cookie para o usuário, dessa forma, o servidor precisará apenas desse Cookie, e não do login e senha de um usuário. Isso é mais seguro, porém Sessões tem tempo geralmente limitado, e tendem a expirar depois de um certo tempo.

No HTTP, a conexão SEMPRE começa do cliente.

/------/CAPITULO 5/---/Depurando a requisição HTTP/-----------------------------------------------------------------------/

Utilimos a parte de Network do Developers Console e ele possuí diversas funções interessantes.

Um exemplo de METODO HTTP é o GET.

O cógido 200 após umaa requisição GET significa que tudo deu certo! (Não sei se isso se aplica ao POST)

404 é o código após um requisição quando algo buscado não existe.

O código 301 - Moved permanently significa que aquela requisição deve mandar o usuário para outro URL. Abrindo seus atributos, é possível localizar o atributo Location, que mostra para qual página este código nos redireciona.

O código 500 - Internal Server Erro, é outro tipo de erro, dessa vez, causado pelo lado do servidor, sem culpa alguma do cliente. Esse código é raro porém ainda sim é visto no nosso dia a dia

Esses códigos são chamados de Status Codes. Os Status Codes 200, 301, 500, e 404 são os mais famosos.

/------/CAPITULO 6/---/Parâmetros da requisção/---------------------------------------------------------------------------/

O método GET quando utilizado para buscar algo em um servidor, o mesmo tende a mostrar na URL os parâmetros pesquisados no servidor. Isso é interessante em casos como o Youtube pois podemos compartilhar o link de uma busca, e o outra pessoa cairá na exata mesma página, pois dentro da URL, temos um paremêtro "query", que é utilizado para fazer a mesma busca.

Porém, se estivessemos usando um formulário de Login e Senha, isso deve ser evitado, pois imagine se tiver alguém do seu lado, e dentro da URL, fosse mostrado seu Login e Senha, ruim não? Não só isso mas a URL também ficará salva no histórico, deixando ainda mais perigoso essa utilização. Por isso é utilizado o método POST, que invés de fazer uma requisição e dar respostas para o servidor através de sua URL, o POST realiza a passagem das senhas pela própria requisição deixando invisível para o usuário através do link.

/------/CAPITULO 7/---/Serviços na web com REST/--------------------------------------------------------------------------/

Entendendo sobre recursos e a arquiterura REST.

/------/CAPITULO 8/---/HTTP2 Por uma web mais eficiente/------------------------------------------------------------------/

No HTTP 2, os dados de request passam por 3 camadas. Uma que transforma nosso request em valores binários, outra que transforma os números binários em uma linguagem chamada HPACK, que serve para comprimir ainda mais o request binário, e por último um camada de criptografia. Isso também acontece com a nossa response, que também passa pelas 3 camdas

Dados normais -> Convertidos em BINARIOS -> Convertidos em HPACK -> Criptografados

Isso acontece também com o nosso conteúdo recebido, porém este, passa apenas por 2 camadas. Uma chamada GZIP, que comprime a resposta em um arquivo menor, e a outra, de criptografia, a famosa TLS.

Porque estas mudanças? Qual a utilidade delas?
Resposta: Transformar o ambiente HTTP2 em um ambiente mais seguro e mais eficiente.

No HTTP os cabeçalhos podem ser Stateful, fazendo que não seja necessário a recolocação dos mesmos dados feitos em uma requisição anterior, mas sim apenas as mudanças menores.

Outra função do HTTP2 é o Server Push. Normalmente no HTTP 1.1 por exemplo, ao pedirmos um arquivo HTML, o servidor devolveria ele, e após isso o nosso navegador iria perceber que precisa de uma série de arquivos para realizar sua visualização, como um arquivo CSS, JS, JQUERY, PNG e por causa disso realizaria uma requisição por arquivo faltante por exemplo. Por isso existe o Server Push, que ao enviar o arquivo HTML, já envia todos os outros arquivos que seria necessários para que a página já funcione, agilizando o processo.