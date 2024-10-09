import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrdersService } from '../services/orders.service';
import { OrderDto } from '../DTO/order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Endpoint para obtener los pedidos con base al id del cliente' })
    @ApiResponse({ status: 200, description: 'Pedido obtenido' })
    findOrdersByCustomerId(@Param('id') id: string) {
        return this.ordersService.findOrderById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Endpoint para registrar un nuevo pedido' })
    @ApiResponse({ status: 201, description: 'Pedido registrado correctamente' })
    createOrder(@Body(new ValidationPipe()) orderDto: OrderDto) {
        return this.ordersService.createOrder(orderDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint para actualizar un pedido en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del pedido' })
    @ApiResponse({ status: 201, description: 'Pedido actualizado' })
    @ApiResponse({ status: 404, description: 'Pedido no existente' })
    updateOrder(@Param('id') id: string, @Body(new ValidationPipe()) orderDto: OrderDto) {
        return this.ordersService.updateOrder(id, orderDto);
    }

    @Delete('id')
    @ApiOperation({ summary: 'Endpoint para eliminar un pedido en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del pedido' })
    @ApiResponse({ status: 201, description: 'Pedido eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'Pedido no existente' })
    removeOrder(@Param('id') id: string) {
        return this.ordersService.removeOrder(id);
    }
}
