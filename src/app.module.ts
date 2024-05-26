import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './adapter/driven/database/prisma.service';
import { ClienteRepository } from './adapter/driven/repository/cliente.repository';
import { PedidoRepository } from './adapter/driven/repository/pedido.repository';
import { ProdutoRepository } from './adapter/driven/repository/produto.repository';
import { ClienteService } from './adapter/driven/service/cliente.service';
import { PedidoService } from './adapter/driven/service/pedido.service';
import { ProdutoService } from './adapter/driven/service/produto.service';
import { ClienteController } from './adapter/driver/controller/cliente.controller';
import { PedidoController } from './adapter/driver/controller/pedido.controller';
import { ProdutoController } from './adapter/driver/controller/produto.controller';
import { AppController } from './app.controller';

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
