import { ApiProperty } from '@nestjs/swagger';

export class cliente {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'cliente' })
    nome: string;

    @ApiProperty({ example: '99999999999' })
    cpf: string;

    @ApiProperty({ example: 'teste@teste.com.br' })
    email: string;
}
