import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    phone: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    age: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    gender: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);