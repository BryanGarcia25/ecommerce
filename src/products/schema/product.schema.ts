import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;
    
    @Prop({ required: true, enum: ['Electronics', 'Toys', 'Clothing', 'Baby', 'Pets', 'Games', 'Home'] })
    category: string;
    
    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    stock: number;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    sku: string;

    @Prop({ required: true })
    discount: number;

    @Prop({ required: true })
    supplir: string;

    @Prop({ required: true })
    stars: number;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);