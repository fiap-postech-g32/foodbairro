import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import z from 'zod';

const app = fastify();

const prisma = new PrismaClient();

app.get('/users', async () => {
    const users = await prisma.user.findMany();
    return { users };
});

app.post('/users', async (request, response) => {
    const createUserSchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        cpf: z.string()
    });
    const { nome, email, cpf } = createUserSchema.parse(request.body);
    await prisma.user.create({
        data: {
            nome,
            email,
            cpf
        }
    });
    response.status(201).send();
});

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('HTTP Server running.');
});