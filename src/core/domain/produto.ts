import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { categoria } from '../enum/categoria';

export class produto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'produto' })
    nome: string;

    @ApiProperty({ example: 'descrição' })
    descricao: string;

    @ApiProperty({ example: 'Lanche' })
    categoria: categoria;

    @ApiProperty({ example: '19.99' })
    preco: Decimal;
}
