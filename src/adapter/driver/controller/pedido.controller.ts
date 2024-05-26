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
import { PedidoService } from 'src/adapter/driven/service/pedido.service';
import { Checkout } from 'src/core/domain/checkout';
import { Retorno } from 'src/core/domain/retorno';

@ApiTags('Pedido')
@Controller('pedido')
export class PedidoController {
    constructor(private readonly service: PedidoService) {}

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

    @Get('/obterEmAndamento')
    @ApiOperation({
        description:
            'Método utilizado para obter todos os pedidos em andamento',
    })
    async obterEmAndamento() {
        const result = new Retorno();

        try {
            const produtos = await this.service.obterEmAndamento();
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

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado pedido',
    })
    async alterar(@Body() pedido: any) {
        const result = new Retorno();

        try {
            await this.service.alterar(pedido);
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
