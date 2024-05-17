import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UsuarioController } from './controller/usuario.controller';
import { PrismaService } from './database/prisma.service';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuarioService } from './service/usuario.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    UsuarioController
  ],
  providers: [
    PrismaService,
    UsuarioService,
    UsuarioRepository
  ],
})
export class AppModule {}
