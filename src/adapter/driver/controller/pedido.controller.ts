import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common/decorators';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { checkout } from 'src/core/domain/checkout';
import { PedidoService } from '../../driven/service/pedido.service';

@ApiTags('Pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private readonly service: PedidoService) {}

    @Get('')
    @ApiOperation({
        description: 'Método utilizado para obter todos os pedidos',
    })
    obter() {
        return this.service.obter();
    }

    @Get('/obterEmAndamento')
    @ApiOperation({
        description:
            'Método utilizado para obter todos os pedidos em andamento',
    })
    obterEmAndamento() {
        return this.service.obterEmAndamento();
    }

    @Get(':numero')
    @ApiOperation({
        description:
            'Método utilizado para obter um determinado pedido pelo número',
    })
    obterPorNumero(@Param('numero') numero: string) {
        return this.service.obterPorNumero(numero);
    }

    @Post('/checkout')
    @ApiOperation({
        description: 'Método utilizado para enviar o checkout do pedido',
    })
    criar(@Body() pedido: checkout[]) {
        return this.service.criar(pedido);
    }

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado pedido',
    })
    alterar(@Body() pedido: any) {
        return this.service.alterar(pedido);
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado pedido',
    })
    excluir(@Param('id') id: number) {
        return this.service.excluir(id);
    }
}
