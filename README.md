# Curso GraphQL da Cod3r

Este projeto foi desenvolvido como parte de um estudo sobre o GraphQL, seguindo o curso da Cod3r. O objetivo é criar uma API flexível e profissional utilizando GraphQL, explorando conceitos como queries, mutations, schemas e integração com banco de dados MySQL.

🎥 **[Acesse o Curso](https://www.cod3r.com.br/courses/graphql-criando-apis-profissionais-e-flexiveis)**

---

## **Pré-requisitos**  

Antes de começar, certifique-se de ter os seguintes requisitos:  

- **MySQL** 8.0+  
- **Node.js** 18.19+  

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

3. Inicie o container Docker:
```sh
docker compose up -d
```

4. Acesse o container:
```sh
docker exec -it graphql-container bash
```

5. Navegue até a pasta do projeto dentro do container:
```sh
cd projeto
```

6. Instale as dependências do projeto:
```sh
npm install
```

7. Inicie a aplicação:
```sh
npm start
```

---

## **Acessando a Aplicação**  

Após a inicialização, a aplicação estará disponível em:  

- **Playground GraphQL:** [http://localhost:4000](http://localhost:4000)  

---

<!-- ## **Estrutura do Projeto**  
```
course-graphql/
├── projeto/               # Pasta principal do projeto
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

### Permissões de Arquivos

Caso crie ou edite arquivos dentro do container Docker, você pode precisar ajustar as permissões:
```sh
sudo chown -R $USER:$USER .
```

### Comandos docker

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

---
## **Exemplos de Queries e Mutations**

Aqui estão alguns exemplos de operações que você pode realizar no Playground GraphQL:

**Queries**

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


**Mutations**

- **Criar um novo usuário:**
```graphql
mutation {
    novoUsuario(
        dados: {
            nome: "Rafael",
            email: "rafa.jefer@gmail.com",
            idade: 30
        }
    ) {
        id nome email perfil { nome }
    }
}
```

- **Atualizar usuário:**
```graphql
mutation {
    alterarUsuario(
        filtro: { id: 1 }
        dados: {
            nome: "Rafael Jeferson"
            email: "rafa.jefer@gmail.com"
            idade: 31
        }
    ) {
        id nome email idade
    }
}
```
```graphql
mutation {
    alterarUsuario(
        filtro: { email: "rafa.jefer@gmail.com" }
        dados: {
            nome: "Rafael Jeferson"
            email: "rafa.jefer@gmail.com"
            idade: 31
        }
    ) {
        id nome email idade
    }
}
```


- **Excluir usuário por:**
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

## **Referências**
**[Documentação Oficial do GraphQL](https://graphql.org/learn/)**  
**[Documentação do Apollo Server](https://www.apollographql.com/docs/apollo-server)**  
**[Documentação do Docker](https://docs.docker.com/)**  