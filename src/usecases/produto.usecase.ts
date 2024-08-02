import { Injectable } from '@nestjs/common/decorators';
import { Produto } from 'src/core/entities/produto';
import { Categoria } from 'src/core/enum/categoria';
import { ProdutoRepository } from './repository/produto.repository';

@Injectable()
export class ProdutoUseCase {
    private minCarateresNomeProduto: number = 3;
    private maxCarateresNomeProduto: number = 250;

    constructor(private repository: ProdutoRepository) {
    }

    async obter() {
        return await this.repository.obter();
    }

    async obterPorCategoria(categoria) {
        return await this.repository.obterPorCategoria(categoria);
    }

    async criar(produto: Produto) {
        try {
            if (this.convertStrToEnum(produto.categoria) == '')
                throw new Error('Categoria informada não é permitida!');

            if (produto.nome.length <= this.minCarateresNomeProduto || produto.nome.length > this.maxCarateresNomeProduto)
                throw new Error('O tamanho do nome do produto deve conter entre 4 e 250 caracteres');

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
