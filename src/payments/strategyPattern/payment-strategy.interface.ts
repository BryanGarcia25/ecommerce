import { PaymentDto } from "../dto/payment.dto";

export interface PaymentStrategy {
    createOrder(paymentDto: PaymentDto);
    capturePaymentForOrder(orderId: string);
}