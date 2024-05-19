# lanchonete-back

Sistema para Lanchonete - Tech Challenge - Pós Tech FIAP.

## Criação do repositório

- Criado repositório no GitHub
- Criada a branch develop
- Primeiro commit apenas com .gitignore específico para node e atualização do README.md
- Inicialização de projeto node com npm init e primeiras dependências.
- Criação da sessão "Instalação" no README file
- Implementação do Docker no ambiente de desenvolvimento

## Etapa atual

- [melhoria] Hot reload com o nodemon para facilitar o desenvolvimento

## Próximas etapas

- Definir versão do Node (v20)
- Configuração do Typescript
  - Instalação das dependências do node:
  - Nest.js**
  - express >> RESTful
  - prisma ou typeORM >> ORM
  - nodemon (dev) >> hot reload
  - dotenv (dev) >> variáveis de ambiente
- Documentação da arquitetura
- Testes
- CRUD de usuário
- Criar um arquivo padrão de extensões do VS Code

## Instalação

- Instalar Node (https://nodejs.org/en/download)
- Instalar o banco de dados: `docker pull postgres`
- Rodar o banco de dados: `docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres`
- Clonar o projeto no GitHub: `git clone https://github.com/Grupo-PosTech-FIAP/lanchonete-back.git`
- Mudar branch: `git checkout develop`
- Instalar dependências: `npm install`
- Executar o projeto: `npm start` ou `npm run dev`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


### Ambiente Docker

- Instalar o Docker na máquina. 👉 [docker.com](https://www.docker.com/products/docker-desktop/)
- Buildar a imagem do projeto via linha de comando:
  - Abrir terminal
  - Entrar na pasta do projeto. Exemplo: `cd C:\dev\workspace_mygithub\lanchonete-back`.
  - Executar comando de build da imagem:
  
```
docker build -t lanchonete .
```

- Iniciar um container com a imagem criada:

```
docker run -p 3000:3000 -d lanchonete
```

- Outro comando que também server para subir a aplicação:

```
docker-compose up --build
```

- Interromper a aplicação:

```
docker-compose down
```

## Prisma

- Acessar banco de dados do navegador:

```
npx prisma studio
```

- Deleta todas as tabela:

```
npx prisma migrate reset
```

## Recomendações

Importante desinstalar a extensão Prettier — Code Formatter no seu VSCode, pois o projeto possui sua própria configuração de formatação de código. A extensão pode causar incompatibilidades com as configurações existentes.

