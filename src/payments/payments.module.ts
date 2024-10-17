import { Module } from '@nestjs/common';
import { PaymentsController } from './controller/payments.controller';
import { PaymentsService } from './service/payments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schema/payment.schema';
import { PaypalPaymentStrategy } from './strategyPattern/paypal-payment-strategy';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Payment.name,
          schema: PaymentSchema
        }
      ]
    ),
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsService, 
    {
      provide: 'PAYMENT_STRATEGY',
      useClass: PaypalPaymentStrategy
    },
    PaypalPaymentStrategy
  ]
})
export class PaymentsModule {}
