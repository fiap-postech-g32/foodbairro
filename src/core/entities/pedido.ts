import { ApiProperty } from '@nestjs/swagger';
import { PedidoProduto } from '@prisma/client';
import { StatusPagamento } from '../enum/statusPagamento';
import { StatusPedido } from '../enum/statusPedido';

export class Pedido {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: '1' })
    numero: string;

    @ApiProperty({ example: 'RECEBIDO' })
    status: StatusPedido;

    @ApiProperty({ example: 'PENDENTE' })
    statusPagamento: StatusPagamento;

    @ApiProperty()
    pedidoProduto: PedidoProduto[];

    constructor(numero: string, status: StatusPedido, statusPagamento: StatusPagamento, pedidoProduto: any) {
        this.numero = numero,
            this.status = status,
            this.statusPagamento = statusPagamento,
            this.pedidoProduto = pedidoProduto
    }
}
