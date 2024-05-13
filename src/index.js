import fastify from 'fastify';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = fastify();

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

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('HTTP Server running.');
});