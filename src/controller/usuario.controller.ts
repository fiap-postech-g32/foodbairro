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
import { UsuarioService } from '../service/usuario.service';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
    constructor(private readonly service: UsuarioService) {}

    @Get()
    obter() {
        return this.service.obter();
    }

    @Get(':cpf')
    obterPorCpf(@Param('cpf') cpf: string) {
        return this.service.obterPorCpf(cpf);
    }

    @Post()
    criar(@Body() usuario: any) {
        return this.service.criar(usuario);
    }

    @Put()
    alterar(@Body() usuario: any) {
        return this.service.alterar(usuario);
    }

    @Delete(':id')
    excluir(@Param('id') id: string) {
        return this.service.excluir(id);
    }
}
