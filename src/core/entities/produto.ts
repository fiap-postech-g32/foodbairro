import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { Categoria } from '../enum/categoria';

export class Produto {
    @ApiProperty({ example: 1, required: false })
    id: number;

    @ApiProperty({ example: 'X-Salada', required: true })
    nome: string;

    @ApiProperty({ example: 'Hamburguer artesanal de 150g, queijo prato, alface e tomate, servido no pão de brioche', required: true })
    descricao: string;

    @ApiProperty({ example: 'Lanche', required: true })
    categoria: Categoria;

    @ApiProperty({ example: '25.99', required: true })
    preco: Decimal;

    constructor(id: number, nome: string, descricao: string, categoria: Categoria, preco: Decimal) {
        this.id = id,
            this.nome = nome,
            this.descricao = descricao,
            this.categoria = categoria,
            this.preco = preco
    }
}
