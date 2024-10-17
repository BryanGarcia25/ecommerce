import axios from "axios";
import { PaymentDto } from "../dto/payment.dto";
import { PaymentStrategy } from "./payment-strategy.interface";
import { paypalConfig } from "../configs/paypal/paypal.config";

export class PaypalPaymentStrategy implements PaymentStrategy {

    private async getAccessToken() {
        const response = await axios({
            url: `${paypalConfig.paypalApi}/v1/oauth2/token`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: paypalConfig.clientId,
                password: paypalConfig.clientSecret
            },
            data: 'grant_type=client_credentials'
        });

        return response.data.access_token;
    }

    async createOrder(paymentDto: PaymentDto) {
        const token = await this.getAccessToken();

        const response = await axios({
            url: `${paypalConfig.paypalApi}/v2/checkout/orders`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: paymentDto.currency,
                            value: paymentDto.totalAmount
                        }
                    }
                ],
                application_context: {
                    brand_name: 'ECOMMERCE',
                    landing_page: 'NO_PREFERENCE',
                    user_action: 'PAY_NOW',
                    return_url: `http://localhost:3000/payments/capture-payment/${paymentDto.orderId}`,
                }
            }
        });
        return response.data;   
    }

    async capturePaymentForOrder(token: string) {
        const tokenAuthorization = await this.getAccessToken();

        const response = await axios({
            url: `${paypalConfig.paypalApi}/v2/checkout/orders/${token}/capture`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenAuthorization}`,
            },
        });

        return response.data;
    }

}