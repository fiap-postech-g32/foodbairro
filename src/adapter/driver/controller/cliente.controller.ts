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
import { ClienteService } from 'src/adapter/driven/service/cliente.service';
import { Cliente } from 'src/core/domain/cliente';
import { InsereCliente } from 'src/core/domain/insereCliente';
import { Retorno } from 'src/core/domain/retorno';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
    constructor(private readonly service: ClienteService) {}

    @Get()
    @ApiOperation({
        description: 'Método utilizado para obter todos os clientes',
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

    @Get(':cpf')
    @ApiOperation({
        description:
            'Método utilizado para obter um determinado cliente pelo CPF',
    })
    async obterPorCpf(@Param('cpf') cpf: string) {
        const result = new Retorno();

        try {
            const produtos = await this.service.obterPorCpf(cpf);
            result.data = produtos;
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Post()
    @ApiOperation({
        description: 'Método utilizado para inserir um novo cliente',
    })
    async criar(@Body() cliente: InsereCliente) {
        const result = new Retorno();

        try {
            await this.service.criar(cliente);
            result.mensagem = 'Cliente incluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado cliente',
    })
    async alterar(@Body() cliente: Cliente) {
        const result = new Retorno();

        try {
            await this.service.alterar(cliente);
            result.mensagem = 'Cliente alterado com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado cliente',
    })
    async excluir(@Param('id') id: string) {
        const result = new Retorno();

        try {
            await this.service.excluir(id);
            result.mensagem = 'Cliente excluído com sucesso';
        } catch (error) {
            result.sucesso = false;
            result.mensagem = error;
        }

        return result;
    }
}
