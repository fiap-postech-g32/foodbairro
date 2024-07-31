import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClienteController } from './adapters/controller/cliente.controller';
import { PedidoController } from './adapters/controller/pedido.controller';
import { ProdutoController } from './adapters/controller/produto.controller';
import { AppController } from './app.controller';
import { PrismaService } from './usecases/database/prisma.service';
import { ClienteRepository } from './usecases/repository/cliente.repository';
import { PedidoRepository } from './usecases/repository/pedido.repository';
import { ProdutoRepository } from './usecases/repository/produto.repository';
import { ClienteService } from './usecases/service/cliente.service';
import { PedidoService } from './usecases/service/pedido.service';
import { ProdutoService } from './usecases/service/produto.service';

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
export class AppModule { }
