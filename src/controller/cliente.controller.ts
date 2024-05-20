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
import { ClienteService } from '../service/cliente.service';

@ApiTags('Cliente')
@Controller('cliente')
export class ClienteController {
    constructor(private readonly service: ClienteService) {}

    @Get()
    @ApiOperation({
        description: 'Método utilizado para obter todos os clientes',
    })
    obter() {
        return this.service.obter();
    }

    @Get(':cpf')
    @ApiOperation({
        description:
            'Método utilizado para obter um determinado cliente pelo CPF',
    })
    obterPorCpf(@Param('cpf') cpf: string) {
        return this.service.obterPorCpf(cpf);
    }

    @Post()
    @ApiOperation({
        description: 'Método utilizado para inserir um novo cliente',
    })
    criar(@Body() cliente: insereCliente) {
        return this.service.criar(cliente);
    }

    @Put()
    @ApiOperation({
        description: 'Método utilizado para atualizar um determinado cliente',
    })
    alterar(@Body() cliente: cliente) {
        return this.service.alterar(cliente);
    }

    @Delete(':id')
    @ApiOperation({
        description: 'Método utilizado para excluir um determinado cliente',
    })
    excluir(@Param('id') id: string) {
        return this.service.excluir(id);
    }
}
