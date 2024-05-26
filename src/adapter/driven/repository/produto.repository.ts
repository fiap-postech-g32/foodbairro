import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from '../database/prisma.service';
import { BaseRepository } from './base.repository';

@Injectable()
export class ProdutoRepository implements BaseRepository {
    constructor(private prisma: PrismaService) {}

    async obter() {
        return await this.prisma.produto.findMany();
    }

    async obterPorId(id) {
        return await this.prisma.produto.findUnique({
            where: {
                id: id,
            },
        });
    }

    async obterPorCategoria(categoria) {
        return await this.prisma.produto.findMany({
            where: {
                categoria: categoria,
            },
        });
    }

    async criar({ nome, descricao, categoria, preco }): Promise<void> {
        await this.prisma.produto.create({
            data: {
                nome,
                descricao,
                categoria,
                preco,
            },
        });
    }

    async alterar({ id, nome, descricao, categoria, preco }) {
        await this.prisma.produto.update({
            data: {
                nome,
                descricao,
                categoria,
                preco,
            },
            where: {
                id,
            },
        });
    }

    async excluir(id) {
        return await this.prisma.produto.delete({
            where: {
                id,
            },
        });
    }
}
