import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  
  // Configurar Swagger para la documentación de API
  const documentBuilder = new DocumentBuilder()
    .setTitle('Servicio de Clientes')
    .setDescription('API para gestionar clientes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('API', app, document);
  
  await app.listen(3000);
}
bootstrap();
