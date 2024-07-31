import { ApiProperty } from '@nestjs/swagger';

export class Cliente {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'cliente' })
    nome: string;

    @ApiProperty({ example: '99999999999' })
    cpf: string;

    @ApiProperty({ example: 'teste@teste.com.br' })
    email: string;

    constructor(nome: string, cpf: string, email: string) {
        this.nome = nome,
            this.cpf = cpf,
            this.email = email
    }
}
