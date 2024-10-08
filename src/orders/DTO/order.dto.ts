import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class OrderDto {
    @ApiProperty({ description: 'Id del cliente que realiza el pedido' })
    @IsString()
    @IsNotEmpty()
    readonly customerId: string;

    @ApiProperty({ description: 'Lista de ids de productos que se comprarán' })
    @IsString()
    @IsNotEmpty()
    readonly productIds: string[];

    @ApiProperty({ description: 'Fecha que se realizo el pedido' })
    @IsString()
    @IsNotEmpty()
    readonly orderDate: Date;

    @ApiProperty({ description: 'Total a pagar del pedido' })
    @IsString()
    @IsNotEmpty()
    readonly totalAmount: string;

    @ApiProperty({ description: 'Método de pago (Tarjeta bancaria, PayPal, transferencia, cupón, etc.)' })
    @IsString()
    @IsNotEmpty()
    readonly payMethod: string;

    @ApiProperty({ description: 'Estatus del pedido (Procesando, enviando, entregado, cancelado)' })
    @IsString()
    @IsNotEmpty()
    readonly orderStatus: string;

    @ApiProperty({ description: 'Dirección a donde se entregará el pedido' })
    @IsString()
    @IsNotEmpty()
    readonly orderAddress: string;

    @ApiProperty({ description: 'Dirección de facturación (Opcional)' })
    @IsString()
    @IsNotEmpty()
    readonly orderBillingAddress?: string;

    @ApiProperty({ description: 'Método de envio (normal, express, etc.)' })
    @IsString()
    @IsNotEmpty()
    readonly shippingMethod: string;
    
    @ApiProperty({ description: 'Número de seguimiento del pedido' })
    @IsString()
    @IsNotEmpty()
    readonly trackingNumber: string;

    @ApiProperty({ description: 'Fecha estimada de la entrega del pedido' })
    @IsString()
    @IsNotEmpty()
    readonly estimatedDeliveryDate: string;

    @ApiProperty({ description: 'Estado del pago (Pendiente, realizado, fallido)' })
    @IsString()
    @IsNotEmpty()
    readonly paymentStatus: string;

    @ApiProperty({ description: 'Notas especiales realizadas del cliente sobre el pedido' })
    @IsString()
    @IsNotEmpty()
    readonly orderNotes: string;

    @ApiProperty({ description: 'Código de descuento (Opcional)' })
    @IsString()
    @IsNotEmpty()
    readonly discountCode?: string;

    @ApiProperty({ description: 'Comisión aplicada al pedido' })
    @IsString()
    @IsNotEmpty()
    readonly taxAmount: string;
}