import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { Categoria } from '../enum/categoria';

export class Produto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'X-Salada' })
    nome: string;

    @ApiProperty({ example: 'Hamburguer artesanal de 150g, queijo prato, alface e tomate, servido no pão de brioche' })
    descricao: string;

    @ApiProperty({ example: 'Lanche' })
    categoria: Categoria;

    @ApiProperty({ example: '25.99' })
    preco: Decimal;
}
