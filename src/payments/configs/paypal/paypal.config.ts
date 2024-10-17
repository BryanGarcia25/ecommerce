import { config } from 'dotenv';
config();

export const paypalConfig = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    paypalApi: 'https://api-m.sandbox.paypal.com'
}