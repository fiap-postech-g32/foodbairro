import { Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/database/prisma.service";
import { BaseRepository } from "./base.repository";

@Injectable()
export class UsuarioRepository implements BaseRepository {

    constructor(private prisma: PrismaService) { }

    async obter() {
        return await this.prisma.usuario.findMany();
    }

    async obterPorCpf({ cpf }) {
        return await this.prisma.usuario.findFirst({
            where: {
                cpf
            }
        });
    }

    async criar({ nome, cpf, email }): Promise<void> {
        await this.prisma.usuario.create({
            data: {
                nome,
                cpf,
                email
            }
        });
    }

    async alterar({ id, nome, email }) {
        await this.prisma.usuario.update({
            data: {
                nome,
                email
            },
            where: {
                id
            }
        });
    }

    async excluir({ id }) {
        return await this.prisma.usuario.delete({
            where: {
                id
            }
        });
    }

}