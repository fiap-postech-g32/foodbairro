import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ClienteController } from './controller/cliente.controller';
import { PedidoController } from './controller/pedido.controller';
import { ProdutoController } from './controller/produto.controller';
import { PrismaService } from './database/prisma.service';
import { ClienteRepository } from './repository/cliente.repository';
import { PedidoRepository } from './repository/pedido.repository';
import { ProdutoRepository } from './repository/produto.repository';
import { ClienteService } from './service/cliente.service';
import { PedidoService } from './service/pedido.service';
import { ProdutoService } from './service/produto.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [
        AppController,
        ClienteController,
        ProdutoController,
        PedidoController,
    ],
    providers: [
        PrismaService,
        ClienteService,
        ClienteRepository,
        PedidoService,
        PedidoRepository,
        ProdutoService,
        ProdutoRepository,
    ],
})
export class AppModule {}
