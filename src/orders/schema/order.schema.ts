import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Order {
    @Prop({ ref: 'customers', required: true })
    customerId: Types.ObjectId;
    
    @Prop({ type: Types.ObjectId, ref: 'products', required: true })
    productIds: string[];
    
    @Prop({ required: true })
    orderDate: Date;
    
    @Prop({ required: true })
    totalAmount: string;
    
    @Prop({ required: true, enum: ['Tarjeta de credito', 'Transferencia Bancaria', 'PayPal', 'Cupón'] })
    payMethod: string;
    
    @Prop({ required: true, enum: ['Procesando', 'Enviado', 'Entregado', 'Cancelado'] })
    orderStatus: string;
    
    @Prop({ required: true })
    orderAddress: string;
    
    @Prop({ required: false })
    orderBillingAddress: string;
    
    @Prop({ required: true, enum: ['Normal', 'Express'] })
    shippingMethod: string;

    @Prop({ required: true })
    trackingNumber: string;
    
    @Prop({ required: true })
    estimatedDeliveryDate: Date;
    
    @Prop({ required: true, enum: ['Pendiente', 'Completado', 'Fallido'] })
    paymentStatus: string;
    
    @Prop({ required: true })
    orderNotes: string;
    
    @Prop({ required: false })
    discountCode: string;    
    
    @Prop({ required: true })
    taxAmount: string;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order)