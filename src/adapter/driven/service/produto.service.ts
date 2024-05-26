import { Injectable } from '@nestjs/common/decorators';
import { Categoria } from '../../../core/enum/categoria';
import { ProdutoRepository } from '../repository/produto.repository';

@Injectable()
export class ProdutoService {
    constructor(private repository: ProdutoRepository) {}

    async obter() {
        return await this.repository.obter();
    }

    async obterPorCategoria(categoria) {
        return await this.repository.obterPorCategoria(categoria);
    }

    async criar(produto: any) {
        try {
            const teste = this.convertStrToEnum(produto.categoria);
            if (teste == '')
                throw new Error('Categoria informada não é permitida!');

            return await this.repository.criar(produto);
        } catch (error) {
            return error;
        }
    }

    async alterar(produto: any) {
        return await this.repository.alterar(produto);
    }

    async excluir(id: number) {
        id = Number(id);
        return this.repository.excluir(id);
    }

    verificaCategoria(categoria: string): categoria is Categoria {
        return Object.values<string>(categoria).includes(categoria);
    }

    convertStrToEnum<T extends keyof typeof Categoria>(
        convertingStr: string,
    ): Categoria | string {
        if (Object.values(Categoria).includes(convertingStr as Categoria)) {
            return convertingStr as Categoria;
        } else {
            return '';
        }
    }
}
