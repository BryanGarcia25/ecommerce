import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Payment {
    @Prop({ ref: 'customers', required: true })
    customerId: Types.ObjectId;
    
    @Prop({ type: Types.ObjectId, ref: 'orders', required: true })
    orderId: string;
    
    @Prop({ required: true })
    currency: string;

    @Prop({ required: true })
    totalAmount: string;
    
    @Prop({ required: true, enum: ['Tarjeta de credito', 'Transferencia Bancaria', 'PayPal', 'Cupón'] })
    payMethod: string;

    @Prop({ required: true, enum: ['Pendiente', 'Completado', 'Fallido'] })
    paymentStatus: string;
}

export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment)