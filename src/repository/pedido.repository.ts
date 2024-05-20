import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from './base.repository';

@Injectable()
export class PedidoRepository implements BaseRepository {
    constructor(private prisma: PrismaService) {}

    async obter() {
        return await this.prisma.pedido.findMany({
            include: {
                PedidoProduto: true,
            },
        });
    }

    async obterUltimoPedido() {
        return await this.prisma.pedido.findFirst({
            orderBy: {
                numero: 'desc',
            },
            take: 1,
        });
    }

    async obterPorStatus(status) {
        return await this.prisma.pedido.findMany({
            include: {
                PedidoProduto: true,
            },
            where: {
                status: { in: status },
            },
        });
    }

    async obterPorNumero(numero) {
        return await this.prisma.pedido.findFirst({
            include: {
                PedidoProduto: true,
            },
            where: {
                numero: numero,
            },
        });
    }

    async criar(pedido): Promise<void> {
        await this.prisma.pedido.create({
            data: pedido,
        });
    }

    async alterar({ id, status }) {
        await this.prisma.pedido.update({
            data: {
                status,
            },
            where: {
                id,
            },
        });
    }

    async excluir(id) {
        return await this.prisma.pedido.delete({
            where: {
                id,
            },
        });
    }
}
