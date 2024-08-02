import { Injectable } from '@nestjs/common/decorators';
import { ClienteRepository } from './repository/cliente.repository';

@Injectable()
export class ClienteUseCase {
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

            cliente.cpf = cliente.cpf.replace('.', '').replace('-', '');

            if (!this.validarCPF(cliente.cpf))
                throw new Error('CPF inválido!');

            if (await this.validaClienteExistente(cliente) > 0)
                throw new Error('Já existe um cliente com o CPF e Email informados!');

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

    async validaClienteExistente(cliente) {
        return await this.repository.verificaClienteExistente(cliente);
        // let clienteExistente = await this.repository.verificaClienteExistente(cliente);
        // if (clienteExistente > 0) {
        //     return true;
        // } else {
        //     return false;
        // }
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
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        let add = 0;
        let i: number;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }
}
