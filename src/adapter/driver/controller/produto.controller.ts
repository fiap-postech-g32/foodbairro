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
import { insereProduto } from 'src/core/domain/insereProduto';
import { produto } from 'src/core/domain/produto';
import { categoria } from '../../../core/enum/categoria';
import { ProdutoService } from '../../driven/service/produto.service';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly service: ProdutoService) {}

    @Get('')
    @ApiOperation({
        description: 'Método utilizado para obter todos os produtos',
    })
    obter() {
        return this.service.obter();
    }

    @Get(':categoria')
    @ApiOperation({
        description:
            'Método utilizado para obter todos os produtos por uma determinada categoria',
    })
    @ApiParam({ name: 'categoria', enum: categoria })
    obterPorCategoria(@Param('categoria') categoria: categoria) {
        return this.service.obterPorCategoria(categoria);
    }

    @Post('')
    @ApiOperation({
        description: 'Método utilizado para inserir um novo produto',
    })
    criar(@Body() produto: insereProduto) {
        return this.service.criar(produto);
    }

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado produto',
    })
    alterar(@Body() produto: produto) {
        return this.service.alterar(produto);
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado produto',
    })
    excluir(@Param('id') id: number) {
        return this.service.excluir(id);
    }
}
