import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { Categoria } from '../enum/categoria';

export class Produto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'produto' })
    nome: string;

    @ApiProperty({ example: 'descrição' })
    descricao: string;

    @ApiProperty({ example: 'Lanche' })
    categoria: Categoria;

    @ApiProperty({ example: '19.99' })
    preco: Decimal;
}
