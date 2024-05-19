import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/database/prisma.service';
import { StatusPedido } from 'src/util/enum/StatusPedido';
import { StatusPagamento } from 'src/util/enum/statusPagamento';
import { BaseRepository } from './base.repository';

@Injectable()
export class PedidoRepository implements BaseRepository {
    constructor(private prisma: PrismaService) { }

    async obter() {
        return await this.prisma.pedido.findMany({
            include: {
                PedidoItem: true,
            },
        });
    }

    async obterPorStatus({ status }) {
        return await this.prisma.pedido.findMany({
            include: {
                PedidoItem: true,
            },
            where: {
                status: status,
            },
        });
    }

    async obterPorNumero({ numero }) {
        return await this.prisma.pedido.findFirst({
            include: {
                PedidoItem: true,
            },
            where: {
                numero: numero,
            },
        });
    }

    async criar(produtos): Promise<void> {
        const pedidoProdutos = [];
        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            const produtoAux = await this.prisma.produto.findUnique({
                where: {
                    id: produto.id
                }
            })

            const pedidoProduto = {
                idProduto: produto.id,
                preco: produtoAux.preco
            }

            pedidoProdutos.push(pedidoProduto)
        }

        const ultimoPedido = await this.prisma.pedido.findFirst({
            orderBy: {
                numero: 'desc'
            },
            take: 1
        });

        const numeroPedido = ultimoPedido?.numero ? Number(ultimoPedido.numero) + 1 : 1;

        const statusPedido = StatusPedido.RECEBIDO;
        const statusPagamentoPedido = StatusPagamento.PENDENTE;

        await this.prisma.pedido.create({
            data: {
                numero: numeroPedido,
                status: statusPedido,
                statusPagamento: statusPagamentoPedido,
                PedidoItem: {
                    create: pedidoProdutos
                }
            },
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

    async excluir({ id }) {
        return await this.prisma.pedido.delete({
            where: {
                id,
            },
        });
    }
}
