# shop-api
## Projeto Mateus Borges e Guimarães

## Objetivo
API criada com fins didáticos para um e-commerce especializado em venda de camisetas. A API permite o login e cadastro de usuários, a criação de um carrinho de compras e o cadastro dos produtos da loja com suas respectivas informações.

## Tecnologias Utilizadas
As tecnologias e dependências externas utilizadas foram:
- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Cors
- Crypto-js
- Dotenv
- Jsonwebtoken
- Multer
- Nodemon

## Documentação da API

### Authentication Endpoints (`auth.js`):
- **POST** http://localhost:5000/api/auth/register  
  Requer um objeto JSON com `username`, `email` e `password`.

- **POST** http://localhost:5000/api/auth/login  
  Requer um objeto JSON com `username` e `password`.

- **POST** http://localhost:5000/api/auth/validate-token  
  Requer um Token JWT válido nos cabeçalhos da requisição para autenticação.

### User Endpoints (`user.js`):
- **PUT** http://localhost:5000/api/users/:id  
  Requer um objeto JSON com os campos a serem atualizados para o usuário identificado por `:id`.

- **DELETE** http://localhost:5000/api/users/:id  
  Deleta o usuário identificado por `:id`.

- **GET** http://localhost:5000/api/users/find/:id  
  Recupera informações sobre o usuário identificado por `:id`.

- **GET** http://localhost:5000/api/users/  
  Recupera uma lista de usuários.

- **POST** http://localhost:5000/api/users/validate-token  
  Requer um Token JWT válido nos cabeçalhos da requisição para autenticação.

### Product Endpoints (`product.js`):
- **POST** http://localhost:5000/api/products/  
  Requer um objeto JSON com detalhes do produto, incluindo pelo menos os campos obrigatórios.

- **PUT** http://localhost:5000/api/products/:id  
  Requer um objeto JSON com os campos a serem atualizados para o produto identificado por `:id`.

- **DELETE** http://localhost:5000/api/products/:id  
  Deleta o produto identificado por `:id`.

- **GET** http://localhost:5000/api/products/find/:id  
  Recupera informações sobre o produto identificado por `:id`.

- **GET** http://localhost:5000/api/products/  
  Recupera uma lista de produtos.

### Cart Endpoints (`cart.js`):
- **POST** http://localhost:5000/api/carts/  
  Requer um objeto JSON com detalhes do carrinho, incluindo pelo menos os campos obrigatórios.

- **PUT** http://localhost:5000/api/carts/:id  
  Requer um objeto JSON com os campos a serem atualizados para o carrinho identificado por `:id`.

- **DELETE** http://localhost:5000/api/carts/:id  
  Deleta o carrinho identificado por `:id`.

- **GET** http://localhost:5000/api/carts/find/:userId  
  Recupera o carrinho para o usuário identificado por `:userId`.

- **GET** http://localhost:5000/api/carts/  
  Recupera uma lista de todos os carrinhos.

## Estrutura do Banco de Dados
*Observação: Os IDs e tokens são gerados automaticamente.*
- ![user](https://github.com/MateusBorgesGuimaraes/shop-api/assets/104425878/ee0b3e3d-af88-423e-b740-f41b082ae846)
- ![product](https://github.com/MateusBorgesGuimaraes/shop-api/assets/104425878/737aaa49-dc73-4378-8168-d85c5700566a)
-![cart](https://github.com/MateusBorgesGuimaraes/shop-api/assets/104425878/5e4d7fcb-2200-4c75-8844-daf918d19a31)

## Créditos
Inspirações para a criação da API:
- [Tutorial 1](https://youtu.be/rMiRZ1iRC0A?si=NKOwOgVAIpzLUpio)
- [Tutorial 2](https://youtu.be/3Eam3ogU-uk)
- [Playlist](https://www.youtube.com/playlist?list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp)

## Como usar
Para usar a API, faça o clone do repositório para sua máquina, tenha o Node.js instalado, abra o projeto no Visual Studio Code e, em seguida, abra o terminal. Inicie o servidor local com o comando: `npm start`. A partir desse ponto, a API estará funcionando localmente na sua máquina na porta 5000.
