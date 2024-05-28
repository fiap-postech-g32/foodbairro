import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
async function main() {
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('X-Salada', 'Hamburguer artesanal de 150g, queijo prato, alface e tomate, servido no pão de brioche', 'Lanche', 25.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('X-Bacon', 'Hamburguer artesanal de 150g, queijo prato, fatias de bacon, servido no pão de brioche', 'Lanche', 28.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('X-Tudo', 'Hamburguer artesanal de 150g, queijo prato, presunto, ovo, fatias de bacon, servido no pão de brioche', 'Lanche', 35.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Coca-cola Lata 350ml', 'Lata de Coca-Cola 350ml, queijo prato, alface e tomate, servido no pão de brioche', 'Bebida', 5.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Garaná Lata 350ml', 'Lata de Guaraná 350ml', 'Bebida', 5.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Água 600ml', 'Garraga de água natual de 600ml', 'Bebida', 3.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Sorvete de baunilha', 'Bola de sorvete de baunilha', 'Sobremesa', 7.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Sorvete de chocolate', 'Bola de sorvete de chocolate', 'Sobremesa', 7.99) ON CONFLICT DO NOTHING;`
    await prisma.$executeRaw`INSERT INTO Produto (nome, descricao, categoria, preco) VALUES ('Sorvete de morango', 'Bola de sorvete de morango', 'Sobremesa', 7.99) ON CONFLICT DO NOTHING;`
}

main()
    .then(main)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })