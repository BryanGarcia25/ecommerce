import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    CustomersModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`
      })
    }),
    AuditModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
