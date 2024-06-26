import { ApiProperty } from '@nestjs/swagger';

export class InsereCliente {
    @ApiProperty({ example: 'cliente' })
    nome: string;

    @ApiProperty({ example: '99999999999' })
    cpf: string;

    @ApiProperty({ example: 'teste@teste.com.br' })
    email: string;
}
