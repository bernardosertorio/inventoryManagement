<h1 align="center">
  Back-end Inventory Management
<h1>

## 🔖 Sobre

Projeto desenvolvido como desafio para vaga de emprego
---

## 💻  Paradigma utilizado

- [Orientado a Objeto]

---

## 💻  Metodologia utilizada

- [SOLID](https://pt.wikipedia.org/wiki/SOLID)
  Essa metodologia nos facilita ao acoplamento e ao desacoplamento de módulos,
  provedores e funcionalidades da nossa aplicação utilizando interfaces que
  orientam e facilitam o manejo e manutenibilidade do projeto.

---

## 💻 Tecnologias usadas no back-end

- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)

---

## ⇣ Como fazer o download do projeto

```bash
# Clone o repositorio na sua pasta de preferência
$ git clone https://github.com/bernardosertorio/inventoryManagement.git

# Entre no diretório
$ cd inventoryManagement

$ cd backend

depois abra no VScode ($ code ..)

# Instale as dependências
$ yarn

# Inicie o projeto Back-end
$ yarn dev:server

```
---

## ⇣ Iniciando o banco de dados (Postgres)

- Inicie seu Docker

- Crie no seu administador de banco de dados um banco que pode ser chamado inventorymanagement. Depois, no seu arquivo ormconfig.json, coloque suas
credenciais do banco de dados (username, password,
database(inventorymanagement)).

- Feito isso, você precisará rodar as migrations com o comando:

$ yarn typeorm migration:run

---

## ⇣ Crie as rotas no Insomnia

```bash
# No Insomnia crie quatro pastas: Sessions, Category, Product e Sku

- [Sessions]: Estará as rotas da criação do usuário e sua autenticação no sistema:

  - Create: (http://localhost:3333/users)
  - Create: (http://localhost:3333/sessions)

  Para criar o usuário você precisará do name, email e password. Utilize o Post, crie o objeto de criação do usuário como um JSON.

      {
        "name": "fulano",
        "email": "fulano@gmail.com",
        "password": "123456"
      }

  Para logar o usuário criado, você precisará do email e do password cadastrado. Você os utilizará na rota sessions como um JSON no corpo da requisição. Isso feito, o sistema irá gerar um Token JWT. Copie esse token pois você o usará em todas as rotas seguintes.

      {
        "email": "fulano@gmail.com",
        "password": "123456"
      }


- [Category]: Dentro da pasta Category recomendo que você crie todas as rotas:

   - Create: (http://localhost:3333/products/category):

          {
	          "name": "bermuda",
	          "availability": true
          }

   - Get: (http://localhost:3333/products/:category_id)

   - Put: (http://localhost:3333/products/category/edit/:category_id):

        {
	        "name": "short",
	        "availability": true
        }

   - Delete: (http://localhost:3333/products/category/delete/:category_id)

  Não se esqueça de passar o token pra todas elas dentro do Bearer.
  Você também precisará do id da categoria criada para poder executar as rotas do crud de category. Ou seja, você precisará passar o id da categoria criada na rota.

  Dento da pasta Category você também criará uma rota chamada:

    - Get Products in Category: (http://localhost:3333/products/category/productsincategory/:category_id).

  Essa rota lhe retornará todos os produtos criados dentro da categoria criada por você. Basta você passar o id da categoria na rota acima. Mas claro, para ter produtos dentro de uma categoria, você precisa criar ainda esses produtos dentro da categoria. Logo, essa rota é uma rota de relacionamento com a pasta de Product.


- [Product]: Dentro da pasta Product recomendo que você crie todas as rotas:

  - Create: (http://localhost:3333/products/:category_id/product).

      {
        "title": "short azul",
        "availability": true,
        "description": "azul com estrelas",
        "price": "R$100,00"
      }

  - Get: (http://localhost:3333/products/product/:product_id)

  - Put: (http://localhost:3333/products/product/edit/:product_id)

      {
        "title": "short azul claro",
        "availability": true,
        "description": "azul com estrelas",
        "price": "R$95,00"
      }

  - Delete: (http://localhost:3333/products/product/delete/:product_id)

  Não se esqueça de passar o token JWT do usuário criado em todas as rotas.

  Para você criar um produto você precisa passar o id da categoria criada anteriormente ou qualquer outro id de outra categoria criada. Você não conseguirá criar produtos sem passar o id da categoria na rota.

  Para executar as outras rotas do crud de produtos, basta passar o id do produto criado. Isso, claro, se ele foi criado corretamente dentro de uma categoria.

  Dento da pasta Product você também criará uma rota chamada:

    - Get Skus in Product: (http://localhost:3333/products/product/skusinproduct/:product_id).

  Essa rota lhe retornará todos os skus criados dentro do produto criado por você. Basta você passar o id do produto na rota acima. Mas claro, para ter skus dentro de um produto, você precisa criar ainda esses skus dentro do produto. Logo, essa rota é uma rota de relacionamento com a pasta de Sku.


- [Sku]: Dentro da pasta Sku recomendo que você crie todas as rotas:

  - Create: (http://localhost:3333/products/:product_id/sku)

      {
        "title": "sku short azul claro",
        "amount": "300",
        "sizes": "150G, 150P",
        "colors": "azul claro",
	      "materials":"algodão"
      }

  - Get: (http://localhost:3333/products/sku/:sku_id)

  - Put: (http://localhost:3333/products/sku/edit/:sku_id)

      {
	      "title": "sku short azul claro",
        "amount": "200",
        "sizes": "100G, 100P ",
        "colors": "azul claro",
        "materials": "algodão fino"
      }

  - Delete: (http://localhost:3333/products/sku/delete/:sku_id)

  Não se esqueça de passar o token JWT do usuário criado em todas as rotas.

  Para você criar um sku você precisa passar o id do produto criado anteriormente ou qualquer outro id de outro produto criada. Você não conseguirá criar skus sem passar o id do produto na rota.

  Para executar as outras rotas do crud de sku, basta passar o id do sku criado. Isso, claro, se ele foi criado corretamente dentro de um produto.

```

## ⇣ Pontos de melhorias iniciais

  - Percebi no final do projeto que poderia ter criado mais três rotas que retornassem todas as categorias listadas, outra todos os produtos listados e a última todos os skus. Isso facilitária o manejo com a aplicação e o acesso mais simplificado aos Ids.

  - Padrão nos nomes dos métodos dos repositórios: Percebi que não estão padronizados alguns nomes nos métodos dentro dos repositórios de Category, Product e Sku.


Developed by 😃 Bernardo Sertório
