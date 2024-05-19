import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { ProdutoService } from '../service/produto.service';

@ApiTags('Produto')
@Controller('produto')
export class ProdutoController {
    constructor(private readonly service: ProdutoService) { }

    @Get('')
    obter() {
        return this.service.obter();
    }

    @Get(':categoria')
    obterPorCategoria(@Param('categoria') categoria: string) {
        return this.service.obterPorCategoria(categoria);
    }

    @Post('')
    criar(@Body() produto: any) {
        return this.service.criar(produto);
    }

    @Put()
    alterar(@Body() produto: any) {
        return this.service.alterar(produto);
    }

    @Delete(':id')
    excluir(@Param('id') id: string) {
        return this.service.excluir(id);
    }
}
