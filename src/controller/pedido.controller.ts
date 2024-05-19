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
import { PedidoService } from '../service/pedido.service';

@ApiTags('Pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private readonly service: PedidoService) { }

    @Get('')
    obter() {
        return this.service.obter();
    }

    @Get(':numero')
    obterPorNumero(@Param('numero') numero: string) {
        return this.service.obterPorNumero(numero);
    }

    @Post('')
    criar(@Body() pedido: any) {
        return this.service.criar(pedido);
    }

    @Put()
    alterar(@Body() pedido: any) {
        return this.service.alterar(pedido);
    }

    @Delete(':id')
    excluir(@Param('id') id: string) {
        return this.service.excluir(id);
    }
}
