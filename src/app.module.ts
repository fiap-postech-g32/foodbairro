import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClienteController } from './adapters/controller/cliente.controller';
import { PedidoController } from './adapters/controller/pedido.controller';
import { ProdutoController } from './adapters/controller/produto.controller';
import { AppController } from './app.controller';
import { ClienteUseCase } from './usecases/cliente.usecase';
import { PrismaDataBase } from './usecases/database/prisma.database';
import { PedidoUseCase } from './usecases/pedido.usecase';
import { ProdutoUseCase } from './usecases/produto.usecase';
import { ClienteRepository } from './usecases/repository/cliente.repository';
import { PedidoRepository } from './usecases/repository/pedido.repository';
import { ProdutoRepository } from './usecases/repository/produto.repository';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [
        AppController,
        ClienteController,
        ProdutoController,
        PedidoController,
    ],
    providers: [
        PrismaDataBase,
        ClienteUseCase,
        ClienteRepository,
        PedidoUseCase,
        PedidoRepository,
        ProdutoUseCase,
        ProdutoRepository,
    ],
})
export class AppModule { }
