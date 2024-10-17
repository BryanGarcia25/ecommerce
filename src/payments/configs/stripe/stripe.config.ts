import { config } from 'dotenv';
config();

export const stripeConfig = {
    publicKey: process.env.STRIPE_PUBLIC_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
}