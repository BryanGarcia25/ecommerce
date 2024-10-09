import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';
import { AuditModule } from 'src/audit/audit.module';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Order.name,
          schema: OrderSchema
        }
      ]
    ),
    AuditModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
