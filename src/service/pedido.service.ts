import { Injectable } from '@nestjs/common/decorators';
import { PedidoRepository } from 'src/repository/pedido.repository';
import { StatusPagamento } from 'src/util/enum/statusPagamento';
import { StatusPedido } from 'src/util/enum/statusPedido';
import { ProdutoRepository } from './../repository/produto.repository';

@Injectable()
export class PedidoService {
    constructor(
        private pedidoRepository: PedidoRepository,
        private produtoRepository: ProdutoRepository,
    ) {}

    async obter() {
        return await this.pedidoRepository.obter();
    }

    async obterEmAndamento() {
        var status = [];
        status.push(StatusPedido.RECEBIDO);
        status.push(StatusPedido.EM_PREPARACAO);

        let pedidos = await this.pedidoRepository.obterPorStatus(status);

        let pedidosDto = [];
        for (let i = 0; i < pedidos.length; i++) {
            pedidosDto.push({
                id: pedidos[i].id,
                numero: pedidos[i].numero,
                status: pedidos[i].status,
                statusPagamento: pedidos[i].statusPagamento,
                createdAt: pedidos[i].createdAt,
                tempoEspera: await this.verificaTempoEspera(
                    pedidos[i].createdAt.getMinutes(),
                ),
                PedidoProduto: pedidos[i].PedidoProduto,
            });
        }

        return pedidosDto;
    }

    async obterPorNumero(numero: string) {
        return await this.pedidoRepository.obterPorNumero(numero);
    }

    async criar(produtos: any) {
        const pedidoProdutos = [];
        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];
            const produtoAux = await this.produtoRepository.obterPorId(
                produto.id,
            );

            const pedidoProduto = {
                idProduto: produto.id,
                preco: produtoAux.preco,
            };

            pedidoProdutos.push(pedidoProduto);
        }

        const ultimoPedido = await this.pedidoRepository.obterUltimoPedido();

        const numeroPedido = ultimoPedido?.numero
            ? Number(ultimoPedido.numero) + 1
            : 1;

        const statusPedido = StatusPedido.RECEBIDO;
        let statusPagamentoPedido = StatusPagamento.PENDENTE;

        statusPagamentoPedido = this.verificaPagamento();

        const pedido = {
            numero: numeroPedido,
            status: statusPedido,
            statusPagamento: statusPagamentoPedido,
            PedidoProduto: {
                create: pedidoProdutos,
            },
        };

        return await this.pedidoRepository.criar(pedido);
    }

    async alterar(pedido: any) {
        return await this.pedidoRepository.alterar(pedido);
    }

    async excluir(id: number) {
        id = Number(id);
        return await this.pedidoRepository.excluir(id);
    }

    verificaPagamento() {
        return StatusPagamento.PAGO;
    }

    async verificaTempoEspera(dataPedido) {
        return dataPedido + 5 - new Date().getMinutes() < 0
            ? 0
            : dataPedido + 5 - new Date().getMinutes();
    }
}
