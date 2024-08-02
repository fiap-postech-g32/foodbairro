import { Injectable } from '@nestjs/common/decorators';
import { PrismaDataBase } from '../database/prisma.database';
import { BaseRepository } from './base.repository';

@Injectable()
export class ClienteRepository implements BaseRepository {
    constructor(private prisma: PrismaDataBase) { }

    async obter() {
        return await this.prisma.cliente.findMany();
    }

    async obterPorCpf({ cpf }) {
        return await this.prisma.cliente.findFirst({
            where: {
                cpf,
            },
        });
    }

    async verificaClienteExistente({ cpf, email }) {
        return await this.prisma.cliente.count({
            where: {
                cpf,
                email
            },
        });
    }

    async criar({ nome, cpf, email }): Promise<void> {
        await this.prisma.cliente.create({
            data: {
                nome,
                cpf,
                email,
            },
        });
    }

    async alterar({ id, nome, email, cpf }) {
        await this.prisma.cliente.update({
            data: {
                nome,
                email,
                cpf
            },
            where: {
                id,
            },
        });
    }

    async excluir(id) {
        return await this.prisma.cliente.delete({
            where: {
                id,
            },
        });
    }
}
