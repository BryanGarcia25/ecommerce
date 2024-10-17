import { PaymentDto } from "src/payments/dto/payment.dto";
import { PaymentStrategy } from "../payment-strategy.interface";
import Stripe from "stripe";
import { stripeConfig } from "src/payments/configs/stripe/stripe.config";

export class StripePaymentStrategy implements PaymentStrategy {

    async createOrder(paymentDto: PaymentDto) {
        const stripe = new Stripe(stripeConfig.secretKey);

        await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: paymentDto.currency,
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: Number(paymentDto.totalAmount),
                    },
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `http://localhost:3000/payments/capture-payment/${paymentDto.orderId}`,
            cancel_url: 'https://www.google.com'
        });
    }

    capturePaymentForOrder(orderId: string) {
        return 'Hola Mundo'
    }

}