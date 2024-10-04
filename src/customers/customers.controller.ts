import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './DTO/customer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'Clientes obtenidos de la base de datos' })
    findAllCustomers() {
        return this.customersService.findAllCustomers();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Cliente obtenido de la base de datos' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    findCustomerById(@Param('id') id: string) {
        return this.customersService.findCustomerById(id);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'Cliente registrado con éxito' })
    createCustomer(@Body(new ValidationPipe()) customerDTO: CustomerDto) {
        return this.customersService.createCustomer(customerDTO);
    }

    @Put(':id')
    @ApiResponse({ status: 201, description: 'Cliente actualizado con éxito' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    updateCustomer(@Param('id') id: string, @Body(new ValidationPipe()) customerDTO: CustomerDto) {
        return this.customersService.updateCustomer(id, customerDTO);
    }

    @Delete('id')
    @ApiResponse({ status: 201, description: 'Cliente eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'El cliente no existe' })
    removeCustomer(@Param('id') id: string) {
        return this.customersService.removeCustomer(id);
    }

}
