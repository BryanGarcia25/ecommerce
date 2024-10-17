import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from '../schema/payment.schema';
import { Model } from 'mongoose';
import { PaymentDto } from '../dto/payment.dto';
import { PaymentStrategy } from '../strategyPattern/payment-strategy.interface';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectModel(Payment.name) private readonly paymentDocumentModel: Model<PaymentDocument>, 
        @Inject('PAYMENT_STRATEGY') private readonly paymentStrategy: PaymentStrategy
    ) {}

    async createOrder(paymentDto: PaymentDto) {
        this.paymentStrategy.createOrder(paymentDto);
    }

    async capturePayment(orderId: string) {
        return this.paymentStrategy.capturePaymentForOrder(orderId);
    }
}
