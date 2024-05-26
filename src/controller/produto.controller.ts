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
import { insereProduto } from 'src/domain/insereProduto';
import { produto } from 'src/domain/produto';
import { retorno } from 'src/domain/retorno';
import { categoria } from 'src/util/enum/categoria';
import { ProdutoService } from '../service/produto.service';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly service: ProdutoService) {}

    @Get('')
    @ApiOperation({
        description: 'Método utilizado para obter todos os produtos',
    })
    async obter() {
        const result = new retorno();

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
    @ApiParam({ name: 'categoria', enum: categoria })
    async obterPorCategoria(@Param('categoria') categoria: categoria) {
        const result = new retorno();

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
    async criar(@Body() produto: insereProduto) {
        const result = new retorno();

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
    async alterar(@Body() produto: produto) {
        const result = new retorno();

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
        const result = new retorno();

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
