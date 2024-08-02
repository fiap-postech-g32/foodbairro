import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { Produto } from './produto';

export class PedidoProduto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    idPedido: number;

    @ApiProperty()
    idProduto: number;

    @ApiProperty()
    produto: Produto;

    @ApiProperty({ example: '25.99', required: true })
    preco: Decimal;

    constructor(idProduto: number, preco: Decimal) {
        this.idProduto = idProduto,
            this.preco = preco
    }
}