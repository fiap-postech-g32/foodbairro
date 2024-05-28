import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common/decorators';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PedidoService } from 'src/adapter/driven/service/pedido.service';
import { Checkout } from 'src/core/domain/checkout';
import { Retorno } from 'src/core/domain/retorno';
import { StatusPedido } from 'src/core/enum/statusPedido';

@ApiTags('Pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private readonly service: PedidoService) { }

    @Get('')
    @ApiOperation({
        description: 'Método utilizado para obter todos os pedidos',
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

    @Get('/EmPreparacao')
    @ApiOperation({
        description:
            'Método utilizado para obter todos os pedidos em preparação',
    })
    async obterEmPreparacao() {
        const result = new Retorno();

        try {
            const produtos = await this.service.obterEmPreparacao();
            result.data = produtos;
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Get(':numero')
    @ApiOperation({
        description:
            'Método utilizado para obter um determinado pedido pelo número',
    })
    async obterPorNumero(@Param('numero') numero: string) {
        const result = new Retorno();

        try {
            const produtos = await this.service.obterPorNumero(numero);
            result.data = produtos;
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Post('/checkout')
    @ApiBody({ type: [Checkout] })
    @ApiOperation({
        description: 'Método utilizado para enviar o checkout do pedido',
    })
    async criar(@Body() pedido: Checkout[]) {
        const result = new Retorno();

        try {
            await this.service.criar(pedido);
            result.mensagem = 'Pedido incluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Put(':id/status/:status')
    @ApiOperation({
        description: 'Método utilizado para atualizar status do pedido',
    })
    @ApiParam({ name: 'status', enum: StatusPedido })
    async alterar(@Param('id') id: string, @Param('status') status: string) {
        const result = new Retorno();
        try {
            await this.service.alterar({ id: Number(id), status });
            result.mensagem = 'Pedido alterado com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }
        return result;
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado pedido',
    })
    async excluir(@Param('id') id: number) {
        const result = new Retorno();

        try {
            await this.service.excluir(id);
            result.mensagem = 'Pedido excluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }
}
