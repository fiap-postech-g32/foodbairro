import { Injectable } from "@nestjs/common/decorators";
import { UsuarioRepository } from "src/repository/usuario.repository";

@Injectable()
export class UsuarioService {

    constructor(private repository: UsuarioRepository) {}

    async obter() {
        return await this.repository.obter();
    }

    async obterPorCpf(cpf: string) {
        return await this.repository.obterPorCpf({ cpf });
    }
    
    async criar(usuario: any) {
        return await this.repository.criar(usuario);
    }

    async alterar(usuario: any) {
        return await this.repository.alterar(usuario);
    }

    async excluir(id: string) {
        return await this.repository.excluir({ id });
    }

}