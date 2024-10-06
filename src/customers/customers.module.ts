import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './customer.schema';
import { AuditModule } from 'src/audit/audit.module';

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
    AuditModule
  ],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
