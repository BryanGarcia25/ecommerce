import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './customer.schema';
import { AuditModule } from 'src/audit/audit.module';
import { CustomerCreateEvent } from './events/customer-create.event';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { 
          name: Customer.name, 
          schema: CustomerSchema 
        }
      ]
    ),
    AuditModule,
    EventEmitterModule.forRoot()
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerCreateEvent]
})
export class CustomersModule {}
