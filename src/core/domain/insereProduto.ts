import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { Categoria } from '../enum/categoria';

export class InsereProduto {
    @ApiProperty({ example: 'Produto' })
    nome: string;

    @ApiProperty({ example: 'Descrição' })
    descricao: string;

    @ApiProperty({ example: 'Lanche' })
    categoria: Categoria;

    @ApiProperty({ example: '19.99' })
    preco: Decimal;
}
