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
        try {
            if (!this.validarEmail(cliente.email))
                throw new Error('E-mail inválido!');

            if (!this.validarCPF(cliente.cpf))
                throw new Error('CPF inválido!');

            return await this.repository.criar(cliente);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async alterar(cliente: any) {
        return await this.repository.alterar(cliente);
    }

    async excluir(id: number) {
        id = Number(id);
        return await this.repository.excluir(id);
    }

    validarEmail(email) {
        let validarRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(validarRegEmail)) {
            return true;
        } else {
            return false;
        }
    }

    validarCPF(cpf) {
        let validarRegCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (cpf.match(validarRegCPF)) {
            return true;
        } else {
            return false;
        }
    }
}
