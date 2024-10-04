import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar Swagger para la documentación de API
  const config = new DocumentBuilder()
    .setTitle('Servicio de Clientes')
    .setDescription('API para gestionar clientes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('API', app, document);
  
  await app.listen(3000);
}
bootstrap();
