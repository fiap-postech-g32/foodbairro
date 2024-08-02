# FoodBairro

O FoodBairro é o sistema ideal para sua lanchonete. Pronto para atender modelos de negócios escaláveis. Tech Challenge - Pós Tech FIAP.

## Tecnologias

-   Nodejs
-   Typescript e JavaScript
-   Nest.js
-   express
-   prisma (ORM)

## Requisitos

-   Docker e Kubernetes (👉 [docker.com](https://www.docker.com/products/docker-desktop/))
-   Cloud (opcional)


## Instalação

Para subir a aplicação de forma simples, como um container Docker, basta utilizar o comando: `docker-compose up --build`.

Para subir a aplicação com os recursos do Kubernetes, tais como pods, replicaset, services e escalabilidade horizontal, utilize os comandos abaixo:

-   Provisionar pods: `kubectl apply -f .\deployment.yaml`
-   Provisionar service: `kubectl apply -f .\service.yaml`
-   Provisionar escalabilidade horizontal (HPA): `kubectl apply -f .\hpa.yaml`


## Running the app

Após seguir todos os passos, a aplicação deve estar disponível na porta ${PORT}.


## Stress Test

É possível utilizar o K6 para testes. Também foi criado um arquivo de Stress Test (stress.sh).
