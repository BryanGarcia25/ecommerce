import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PaymentDto {
    @ApiProperty({ description: 'Id del cliente que realiza el pedido' })
    @IsString()
    @IsNotEmpty()
    readonly customerId: string;

    @ApiProperty({ description: 'Id del pedido que se va comprar' })
    @IsString()
    @IsNotEmpty()
    readonly orderId: string;

    @ApiProperty({ description: 'Tipo de moneda' })
    @IsString()
    @IsNotEmpty()
    readonly currency: string;

    @ApiProperty({ description: 'Total a pagar del pedido' })
    @IsString()
    @IsNotEmpty()
    readonly totalAmount: string;

    @ApiProperty({ description: 'Método de pago (Tarjeta bancaria, PayPal, transferencia, cupón, etc.)' })
    @IsString()
    @IsNotEmpty()
    readonly payMethod: string;

    @ApiProperty({ description: 'Estado del pago (Pendiente, realizado, fallido)' })
    @IsString()
    @IsNotEmpty()
    readonly paymentStatus: string;
}