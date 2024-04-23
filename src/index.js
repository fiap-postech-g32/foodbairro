const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request, response) => {
    response.send(`
        <h2>
            Hello World!!
            <br>
            Grupo Pós Tech FIAP >> Lanchonete FoodBairro
        </h2>
        <style>body {display: flex; align-items: center; justify-content: center;}</style>
    `);
});

app.listen(PORT, HOST);