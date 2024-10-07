import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Audit extends Document {
    @Prop({ required: true })
    action: string;

    @Prop({ required: true })
    entity: string;

    @Prop({ required: true })
    entityId: string;

    @Prop({ required: true })
    changes: string;

    @Prop({ required: true })
    timestamp: Date;
}

export const AuditSchema = SchemaFactory.createForClass(Audit);