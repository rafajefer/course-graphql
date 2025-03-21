# 🚀 Curso GraphQL - Cod3r  

Este projeto foi desenvolvido como parte do estudo sobre **GraphQL**, através do curso da **Cod3r**. O objetivo é construir uma **API profissional e flexível** utilizando GraphQL, explorando conceitos como **queries, mutations, schemas** e integração com **MySQL**.

📚 **[Acesse o Curso](https://www.cod3r.com.br/courses/graphql-criando-apis-profissionais-e-flexiveis)**  

---

## 📌 **Tecnologias Utilizadas**
- **GraphQL** - Consulta de APIs flexível e eficiente  
- **Node.js** - Plataforma JavaScript para backend  
- **Vue.js** - Framework JavaScript para frontend  
- **Knex.js** - Query builder para SQL  
- **MySQL** - Banco de dados relacional  
- **Docker** - Containerização da aplicação  

---

## **Pré-requisitos**  

Antes de começar, certifique-se de ter os seguintes requisitos:  

- **MySQL** 5.7  
- **Node.js** 16

Ou, alternativamente, utilize **Docker** (recomendado):  

- **Docker** instalado em seu sistema  

---

## **Instalação e Configuração**  

Siga os passos abaixo para configurar e executar o projeto:

1. Clone o repositório:
```sh
git clone https://github.com/rafajefer/course-graphql.git
```

2. Navegue até o diretório do projeto:
```sh
cd course-graphql
```

3. Iniciar os containers (Docker):
```sh
docker compose up -d
```

4. Rodar migrations
```sh
docker exec -it graphql-container npx knex migrate:latest
```

5. Instale as dependências do backend GraphQL
```sh
docker exec -it --user root graphql-container npm install
```

6. Instale as dependências do frontend Vue.JS
```sh
docker exec -it --user root vuejs-container npm install
```

7. Inicie o backend da aplicação:
```sh
docker exec -it graphql-container npm start
```


8. Inicie a aplicação (frontend):
```sh
docker exec -it vuejs-container npm run serve
```

---

## **Acessando a Aplicação**  

Após a inicialização, a aplicação estará disponível em:  

- **Playground GraphQL:** [http://localhost:4000](http://localhost:4000)  
- **Client Vue.JS:** [http://localhost:8080](http://localhost:8080)  
- **PhpMyAdmin:** [http://localhost:8001](http://localhost:8001)  

---

<!-- ## **Estrutura do Projeto**  
```
course-graphql/
├── backend/               # Pasta principal do projeto
│   ├── src/               # Código-fonte da aplicação
│   │   ├── schema/        # Definições do schema GraphQL
│   │   ├── resolvers/     # Resolvers para queries e mutations
│   │   ├── models/        # Modelos do banco de dados
│   │   └── index.js       # Ponto de entrada da aplicação
│   ├── package.json       # Dependências e scripts do projeto
│   └── ...                # Outros arquivos de configuração
├── docker-compose.yml     # Configuração do Docker Compose
└── README.md              # Este arquivo
```

--- -->

## **Comandos Úteis**

### 📂 Permissões de Arquivos

Caso crie ou edite arquivos dentro do container Docker, você pode precisar ajustar as permissões:
```sh
sudo chown -R $USER:$USER .
```

### 🐳 Comandos docker

Iniciar o container:
```sh
docker compose up -d
```

Acessar o container:
```sh
docker exec -it graphql-container bash
```

Parar o container:
```sh
docker compose down
```

Instalar nova dependencia:
```sh
docker exec -it --user root graphql-container npm install dotenv --save
```

### Comandos knex
Criar um nova migration
```sh
docker exec -it graphql-container npx knex migrate:make tabela_perfis
```

Rodar as migrations
```sh
docker exec -it graphql-container npx knex migrate:latest
```

Rollbacks das migrations
```sh
docker exec -it graphql-container npx knex migrate:rollback
```

Inserindo dados na tabela
```sh
docker exec -it graphql-container node testes/insert.js
```

---
## **📡 Exemplos de Queries e Mutations**

Aqui estão alguns exemplos de operações que você pode realizar no Playground GraphQL:

**🔍 Queries**

- **Listar todos os usuarios:**
```graphql
query {
    usuarios {
        id
        nome
        email
        idade
        perfil {
            nome
        }
    }
}
```

- **Buscar usuário:**
```graphql
query {
    usuario (
        filtro: {
            id: 1
            # email: "rafa.jefer@gmail.com"
        }
    ) {
        id nome email
        perfis {
            id nome rotulo
        }
    }
}
```

- **Efetuar login:**
```graphql
query {
    login(
        dados: {
            email: "rafa.jefer@gmail.com"
            senha: "1235"
        }
    ) {
        id nome email
        perfis { nome }
        token
    }
}
```

- **Buscar item por ID:**
```graphql
query {
    usuario(id: 3) {
        ...usuarioCompleto
    }
}
fragment usuarioCompleto on Usuario {
    status, id nome email idade salario vip
    perfil { nome, id }
}
```


**✍ Mutations**

- **Registrar usuário:**
```graphql
mutation {
    registrarUsuario(
        dados: {
            nome: "Rafael pena"
            email: "rafa.jefer@gmail.com"
            senha: "1235"
        }
    ) {
        id nome email
        perfis { nome rotulo }
    }
}
```

- **Criar um novo usuário:**
```graphql
mutation {
    novoUsuario(
        dados: {
            nome: "Rafael"
            email: "rafael@gmail.com"
            senha: "123"
            perfis: [
                { id: 1 }
                { nome: "admin" }
                { nome: "master" }
            ]
        }
    ) {
        id nome email
        perfis {
            id nome
        }
    }
}
```

- **Atualizar usuário:**
```graphql
mutation {
    alterarUsuario(
        filtro: { email: "rafa.jefer@gmail.com"}
        dados: {
            nome: "Rafael Jeferson pena"
            email: "rafa.jefer@gmail.com"
            senha: "1234"
            perfis: [
                { nome: "comum" }
            ]
        }
    )
    {
        id nome email
        perfis {
            id nome
        }
    }
}
```

```graphql
mutation {
    alterarUsuario(
        filtro: { id: 1 }
        dados: {
            nome: "Rafael Jeferson pena"
            email: "rafa.jefer@gmail.com"
            senha: "1234"
            perfis: [
                { nome: "comum" }
            ]
        }
    )
    {
        id nome email
        perfis {
            id nome
        }
    }
}
```

- **Excluir usuário:**
```graphql
mutation {
    excluirUsuario(
        filtro: { email: "rafa.jefer@gmail.com" }
    ) {
        nome id
    }
}
```

```graphql
mutation {
    excluirUsuario(
        filtro: { id: 1 }
    ) {
        nome id
    }
}
```
---

## **📖 Referências**
**🔗 [Documentação Oficial do GraphQL](https://graphql.org/learn/)**  
**🔗 [Documentação do Apollo Server](https://www.apollographql.com/docs/apollo-server)**  
**🔗 [Documentação do knex](https://knexjs.org/guide/)**  
**🔗 [Documentação do Docker](https://docs.docker.com/)**  


## **🤝 Contribuição**
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas na seção de issues.  

## **📝 Licença**
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
