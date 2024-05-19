import { Injectable } from '@nestjs/common/decorators';
import { ProdutoRepository } from 'src/repository/produto.repository';

@Injectable()
export class ProdutoService {
    constructor(private repository: ProdutoRepository) { }

    async obter() {
        return await this.repository.obter();
    }

    async obterPorCategoria(categoria: string) {
        return await this.repository.obterPorCategoria({ categoria });
    }

    async criar(produto: any) {
        return await this.repository.criar(produto);
    }

    async alterar(produto: any) {
        return await this.repository.alterar(produto);
    }

    async excluir(id: string) {
        return await this.repository.excluir({ id });
    }
}
