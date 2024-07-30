docker login

docker build -t app \
    foodbairro-app

docker image ls | grep postgres