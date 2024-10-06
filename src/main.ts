import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import * as winston from 'winston'
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  config();

  // Configurar winston para registrar eventos generados por funcionamiento del sistema
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.simple(),
          )
        }),
        new winston.transports.File({
          filename: 'logs/messages.log',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
          ),
        })
      ]
    })
  });
  
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
