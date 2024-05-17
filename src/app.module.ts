import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PedidoController } from './controller/pedido.controller';
import { UsuarioController } from './controller/usuario.controller';
import { PrismaService } from './database/prisma.service';
import { PedidoRepository } from './repository/pedido.repository';
import { UsuarioRepository } from './repository/usuario.repository';
import { PedidoService } from './service/pedido.service';
import { UsuarioService } from './service/usuario.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController, UsuarioController, PedidoController],
    providers: [
        PrismaService,
        UsuarioService,
        UsuarioRepository,
        PedidoService,
        PedidoRepository,
    ],
})
export class AppModule {}
