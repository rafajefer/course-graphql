# Curso GraphQL da Cod3r

Este projeto foi desenvolvido como parte de um estudo sobre o GraphQL, seguindo o curso da Cod3er.

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

Clone Repositório

```sh
git clone https://github.com/rafajefer/course-graphql.git
```

```sh
cd course-graphql
```

### Instale as dependências do projeto

```sh
docker compose up -d
```

```sh
docker exec -it graphql-container bash
```

```sh
npm install
```

```sh
npm start
```

---

## **Acessando a Aplicação**  

Após a inicialização, a aplicação estará disponível em:  

- **Aplicação:** [http://localhost:4000](http://localhost:4000)  

---

## **Comandos Úteis**  

### Comandos docker

Para start o container utilizando o docker composer

```sh
docker compose up -d
```

Acesse o container

```sh
docker exec -it graphql-container bash
```

### Para encerrar o container

```sh
docker compose down
```



---

## Referências
**[Documentação GraphQL](https://graphql.org/learn/)**