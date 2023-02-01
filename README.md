# <div align="center">Studio sol challenge</div>

API graphql para validação de senhas, com as regras escolhidas pela pessoa usuária.

Feito para o desafio backend do studio sol.

## <div align="center">Tecnologias</div>

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="80px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" width="80px" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" width="80px" />
</div>

## <div align="center">Como usar</div>

Você vai precisar ter instalado [Git](https://git-scm.com/downloads) e [Docker](https://docs.docker.com/engine/).

- Caso queira rodar o projeto diretamente em sua máquina, você vai precisar ter instalado o [Node16+](https://nodejs.org/en/). Tutorial node estará no final deste aqrivo.

Abra um terminal e clone o repositório - exemplo com chave SSH.

```
git clone git@github.com:Valdeci97/studio-sol-challenge.git
```

Entre na pasta do projeto

```
cd studio-sol-challenge/app
```

Inicie o container docker

```
docker compose up -d
```

Se nada de errado ocorreu, a aplicação estará rodando na sua máquina na porta 4000. Basta acessar http://localhost:4000/graphql.

<div align="center">Rodando os testes</div>

Entre no container

```
docker exec -it studio_sol_app bash
```

Rode o script de testes

```
npm test
```

<div align="center">Parando o container</div>

Rode o comando

```
docker compose down
```

## Rodando o projeto em sua máquina local

Abra um terminal e clone o repositório - exemplo com chave SSH.

```
git clone git@github.com:Valdeci97/studio-sol-challenge.git
```

Entre na pasta do projeto

```
cd studio-sol-challenge/app
```

Instale as depêndencias

```
npm install
```

Suba o servidor

```
npm run dev
```

Se nada de errado ocorreu, a aplicação estará rodando na sua máquina na porta 4000. Basta acessar http://localhost:4000/graphql.

Para ver os testes automatizados

```
npm test
```
