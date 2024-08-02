import { Injectable } from '@nestjs/common/decorators';
import { StatusPagamento } from 'src/core/enum/statusPagamento';
import { StatusPedido } from 'src/core/enum/statusPedido';
import { PedidoRepository } from './repository/pedido.repository';
import { ProdutoRepository } from './repository/produto.repository';

@Injectable()
export class PedidoUseCase {
    constructor(
        private pedidoRepository: PedidoRepository,
        private produtoRepository: ProdutoRepository
    ) { }

    async obter() {
        try {
            let pedidos = await this.pedidoRepository.obter();
            pedidos = pedidos.filter(f => f.status != "FINALIZADO");

            pedidos.sort((a, b) => {
                const statusOrder = { "Pronto": 1, "Em Preparação": 2, "Recebido": 3 };
                return (statusOrder[a.status] - statusOrder[b.status]) || ((a.createdAt.getTime() / 1000) - (b.createdAt.getTime() / 1000));
            });

            let pedidosDto = pedidos.map(pedido => ({
                id: pedido.id,
                numero: pedido.numero,
                status: pedido.status,
                statusPagamento: pedido.statusPagamento,
                createdAt: pedido.createdAt,
                tempoEspera: this.verificaTempoEspera(pedido.createdAt.getMinutes()),
                PedidoProduto: pedido.PedidoProduto,
            }));

            return pedidosDto;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async obterEmPreparacao() {
        try {
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
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async obterPorNumero(numero: string) {
        return await this.pedidoRepository.obterPorNumero(numero);
    }

    async criar(produtos: any) {
        try {
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

            const pedido = {
                numero: ultimoPedido?.numero ? Number(ultimoPedido.numero) + 1 : 1,
                status: StatusPedido.RECEBIDO,
                statusPagamento: StatusPagamento.PENDENTE,
                PedidoProduto: {
                    create: pedidoProdutos,
                },
            };

            const pedidoInserido = await this.pedidoRepository.criar(pedido)
            return { numero: pedidoInserido.numero };
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async obterUltimoPedido() {
        try {
            return await this.pedidoRepository.obterUltimoPedido();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async alterar({ id, status }) {
        try {
            return await this.pedidoRepository.alterar({ id, status });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async alterarStatusPagamento({ id, statusPagamento }) {
        try {
            return await this.pedidoRepository.alterarStatusPagamento({ id, statusPagamento });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async excluir(id: number) {
        try {
            id = Number(id);
            return await this.pedidoRepository.excluir(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async verificaTempoEspera(dataPedido) {
        try {
            return dataPedido + 5 - new Date().getMinutes() < 0
                ? 0
                : dataPedido + 5 - new Date().getMinutes();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
