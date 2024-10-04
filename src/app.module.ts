import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CustomersModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
