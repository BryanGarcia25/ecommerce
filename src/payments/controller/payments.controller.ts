import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { PaymentsService } from '../service/payments.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentDto } from '../dto/payment.dto';

@ApiTags('customers')
@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentService: PaymentsService) {}

    @Post('create-order')
    @ApiOperation({ summary: 'Endpoint para crear un pago en linea' })
    @ApiResponse({ status: 201, description: 'Pago realizado' })
    createOrder(@Body(new ValidationPipe()) paymentDto: PaymentDto) {
        return this.paymentService.createOrder(paymentDto);
    }

    @Get('capture-payment/:orderId')
    @ApiParam({ name: 'orderId', description: 'Id del pedido que se realiza la compra' })
    @ApiOperation({ summary: 'Endpoint para capturar el pago realizado' })
    capturePayment(@Query('token') token: string) {
        return this.paymentService.capturePayment(token);
    }
}
