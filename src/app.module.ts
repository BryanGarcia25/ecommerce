import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditModule } from './audit/audit.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    // Configurar Prometheus para monitorear el comportamiento y rendimiento de la aplicación
    PrometheusModule.register({
      defaultMetrics: {
        enabled: true
      }
    }),
    CustomersModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`
      })
    }),
    AuditModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
