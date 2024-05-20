import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { categoria } from '../util/enum/categoria';

export class insereProduto {
    @ApiProperty({ example: 'produto' })
    nome: string;

    @ApiProperty({ example: 'descrição' })
    descricao: string;

    @ApiProperty({ example: 'Lanche' })
    categoria: categoria;

    @ApiProperty({ example: '19.99' })
    preco: Decimal;
}
