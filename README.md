# Desafio Acesso - Twitter

Esse é um app feito para o desafio da Acesso Card de conexão com o Twitter.

#### Tecnologias utilizadas

 * [ReactJS](https://reactjs.org/)
 * [Redux](https://redux.js.org/)
 * [Node](https://nodejs.org/en/)
 * [Express](http://expressjs.com/pt-br/)
 * [Node Twitter](https://github.com/desmondmorris/node-twitter)

Essa versão roda com persistência client-side com o Redux. O backend apenas gerencia rotas e faz a busca na [API do Twitter](https://developer.twitter.com/en.html) para evitar problemas com CORS.

### Colocando para funcionar

Na raiz do projeto (servidor) instale as dependências do projeto com:

    npm install
    
Depois entre na pasta com as dependências do cliente e faça o mesmo:

  cd client-desafio-acesso
    npm install

Feito isso, basta voltar a raiz e executar os servidores. A aplicação rodará na porta 5000 para o servidor e na porta 3000 para o cliente.

  cd ..
    npm run dev
    
Se nenhum imprevisto ocorrer isso deve ser suficiente para ver o resultado na tela.