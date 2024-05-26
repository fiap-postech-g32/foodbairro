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
import { cliente } from 'src/domain/cliente';
import { insereCliente } from 'src/domain/insereCliente';
import { retorno } from 'src/domain/retorno';
import { ClienteService } from '../service/cliente.service';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
    constructor(private readonly service: ClienteService) {}

    @Get()
    @ApiOperation({
        description: 'Método utilizado para obter todos os clientes',
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

    @Get(':cpf')
    @ApiOperation({
        description:
            'Método utilizado para obter um determinado cliente pelo CPF',
    })
    async obterPorCpf(@Param('cpf') cpf: string) {
        const result = new retorno();

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
    async criar(@Body() cliente: insereCliente) {
        const result = new retorno();

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
    async alterar(@Body() cliente: cliente) {
        const result = new retorno();

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
        const result = new retorno();

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
