import { Injectable } from '@nestjs/common/decorators';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from './base.repository';

@Injectable()
export class PedidoRepository implements BaseRepository {
    constructor(private prisma: PrismaService) {}

    async obter() {
        return await this.prisma.pedido.findMany();
    }

    async obterPorStatus({ status }) {
        return await this.prisma.pedido.findMany({
            where: {
                status: status,
            },
        });
    }

    async obterPorNumero({ numero }) {
        return await this.prisma.pedido.findFirst({
            where: {
                numero: numero,
            },
        });
    }

    async criar({ numero, status }): Promise<void> {
        await this.prisma.pedido.create({
            data: {
                id: randomUUID(),
                numero,
                status,
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
