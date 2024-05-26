import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common/decorators';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProdutoService } from 'src/adapter/driven/service/produto.service';
import { InsereProduto } from 'src/core/domain/insereProduto';
import { Produto } from 'src/core/domain/produto';
import { Retorno } from 'src/core/domain/retorno';
import { Categoria } from 'src/core/enum/categoria';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly service: ProdutoService) {}

    @Get('')
    @ApiOperation({
        description: 'Método utilizado para obter todos os produtos',
    })
    async obter() {
        const result = new Retorno();

        try {
            const produtos = await this.service.obter();
            result.data = produtos;
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Get(':categoria')
    @ApiOperation({
        description:
            'Método utilizado para obter todos os produtos por uma determinada categoria',
    })
    @ApiParam({ name: 'categoria', enum: Categoria })
    async obterPorCategoria(@Param('categoria') categoria: Categoria) {
        const result = new Retorno();

        try {
            const produtos = await this.service.obterPorCategoria(categoria);
            result.data = produtos;
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Post('')
    @ApiOperation({
        description: 'Método utilizado para inserir um novo produto',
    })
    async criar(@Body() produto: InsereProduto) {
        const result = new Retorno();

        try {
            await this.service.criar(produto);
            result.mensagem = 'Produto incluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado produto',
    })
    async alterar(@Body() produto: Produto) {
        const result = new Retorno();

        try {
            await this.service.alterar(produto);
            result.mensagem = 'Produto alterado com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado produto',
    })
    async excluir(@Param('id') id: number) {
        const result = new Retorno();

        try {
            await this.service.excluir(id);
            result.mensagem = 'Produto excluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }
}
