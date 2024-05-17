import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FoodBairro API')
    .setDescription('O documento perfeito pra consumir todos os serviços da nossa API.')
    .setVersion('1.0')
    .addTag('foodbairro')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on port ${port}...`);
  console.log(`Swagger Docs available at http://localhost:${port}/api`);
}
bootstrap();
