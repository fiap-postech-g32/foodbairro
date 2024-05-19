import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PedidoController } from './controller/pedido.controller';
import { ProdutoController } from './controller/produto.controller';
import { UsuarioController } from './controller/usuario.controller';
import { PrismaService } from './database/prisma.service';
import { PedidoRepository } from './repository/pedido.repository';
import { ProdutoRepository } from './repository/produto.repository';
import { UsuarioRepository } from './repository/usuario.repository';
import { PedidoService } from './service/pedido.service';
import { ProdutoService } from './service/produto.service';
import { UsuarioService } from './service/usuario.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController, UsuarioController, ProdutoController, PedidoController],
    providers: [
        PrismaService,
        UsuarioService,
        UsuarioRepository,
        PedidoService,
        PedidoRepository,
        ProdutoService,
        ProdutoRepository
    ],
})
export class AppModule { }
