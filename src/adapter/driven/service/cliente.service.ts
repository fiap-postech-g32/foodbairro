import { Injectable } from '@nestjs/common/decorators';
import { ClienteRepository } from '../repository/cliente.repository';

@Injectable()
export class ClienteService {
    constructor(private repository: ClienteRepository) { }

    async obter() {
        return await this.repository.obter();
    }

    async obterPorCpf(cpf: string) {
        return await this.repository.obterPorCpf({ cpf });
    }

    async criar(cliente: any) {
        return await this.repository.criar(cliente);
    }

    async alterar(cliente: any) {
        return await this.repository.alterar(cliente);
    }

    async excluir(id: number) {
        id = Number(id);
        return await this.repository.excluir(id);
    }
}
