import { Injectable } from '@nestjs/common/decorators';
import { PedidoRepository } from 'src/repository/pedido.repository';
import { StatusPedido } from 'src/util/enum/StatusPedido';

@Injectable()
export class PedidoService {
    constructor(private repository: PedidoRepository) { }

    async obter() {
        return await this.repository.obter();
    }

    async obterEmAndamento() {
        var status = new Array(2);
        status.push(StatusPedido.RECEBIDO);
        status.push(StatusPedido.EM_PREPARACAO);

        return await this.repository.obterPorStatus({ status: status });
    }

    async obterPorNumero(numero: string) {
        return await this.repository.obterPorNumero({ numero });
    }

    async criar(pedido: any) {
        return await this.repository.criar(pedido);
    }

    async alterar(pedido: any) {
        return await this.repository.alterar(pedido);
    }

    async excluir(id: string) {
        return await this.repository.excluir({ id });
    }
}
