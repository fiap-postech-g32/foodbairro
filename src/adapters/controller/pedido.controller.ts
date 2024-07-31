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
import { Checkout } from 'src/core/entities/checkout';
import { Produto } from 'src/core/entities/produto';
import { Retorno } from 'src/core/entities/retorno';
import { StatusPagamento } from 'src/core/enum/statusPagamento';
import { StatusPedido } from 'src/core/enum/statusPedido';
import { PedidoService } from 'src/usecases/service/pedido.service';

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
    @ApiBody({ type: [Produto] })
    @ApiOperation({
        description: 'Método utilizado para enviar o checkout do pedido',
    })
    async criar(@Body() produtos: Checkout[]) {
        const result = new Retorno();

        try {
            await this.service.criar(produtos);
            result.mensagem = 'Pedido incluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error.message;
        }

        return result;
    }

    @Put(':id/status/:status')
    @ApiOperation({
        description: 'Método utilizado para atualizar status do pedido',
    })
    @ApiParam({ name: 'status', enum: StatusPedido })
    async alterarStatusPedido(@Param('id') id: string, @Param('status') status: string) {
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

    @Put(':id/statusPagamento/:statusPagamento')
    @ApiOperation({
        description: 'Método utilizado para atualizar status de pagamento do pedido',
    })
    @ApiParam({ name: 'statusPagamento', enum: StatusPagamento })
    async alterarStatusPagamento(@Param('id') id: string, @Param('statusPagamento') statusPagamento: string) {
        const result = new Retorno();
        try {
            await this.service.alterarStatusPagamento({ id: Number(id), statusPagamento });
            result.mensagem = 'Status de pagamento do pedido alterado com sucesso';
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
