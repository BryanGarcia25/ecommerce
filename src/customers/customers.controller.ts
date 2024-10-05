import { Body, Controller, Delete, Get, Param, Post, Put, Req, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './DTO/customer.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    @ApiOperation({ summary: 'Endpoint para obtener todos los clientes registrados' })
    @ApiResponse({ status: 200, description: 'Clientes obtenidos de la base de datos' })
    findAllCustomers() {
        return this.customersService.findAllCustomers();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Endpoint para obtener un cliente en específico mediante su id' })
    @ApiParam({ name: 'id', description: 'ID del cliente' })
    @ApiResponse({ status: 200, description: 'Cliente obtenido de la base de datos' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    findCustomerById(@Param('id') id: string) {
        return this.customersService.findCustomerById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Endpoint para registrar un cliente nuevo' })
    @ApiResponse({ status: 201, description: 'Cliente registrado con éxito' })
    createCustomer(@Body(new ValidationPipe()) customerDTO: CustomerDto, @Req() req) {
        const userId = req.user.userId;
        return this.customersService.createCustomer(customerDTO, userId);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint para actualizar un cliente en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del cliente' })
    @ApiResponse({ status: 201, description: 'Cliente actualizado con éxito' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    updateCustomer(@Param('id') id: string, @Body(new ValidationPipe()) customerDTO: CustomerDto, @Req() req) {
        const userId = req.user.userId;
        return this.customersService.updateCustomer(id, customerDTO, userId);
    }

    @Delete('id')
    @ApiOperation({ summary: 'Endpoint para eliminar un cliente en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del cliente' })
    @ApiResponse({ status: 201, description: 'Cliente eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    removeCustomer(@Param('id') id: string, @Req() req) {
        const userId = req.user.userId;
        return this.customersService.removeCustomer(id, userId);
    }

}
