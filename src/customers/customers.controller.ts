import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './DTO/customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    findAllCustomers() {
        return this.customersService.findAllCustomers();
    }

    @Get(':id')
    findCustomerById(@Param('id') id: string) {
        return this.customersService.findCustomerById(id);
    }

    @Post()
    createCustomer(@Body(new ValidationPipe()) customerDTO: CustomerDto) {
        return this.customersService.createCustomer(customerDTO);
    }

    @Put(':id')
    updateCustomer(@Param('id') id: string, @Body(new ValidationPipe()) customerDTO: CustomerDto) {
        return this.customersService.updateCustomer(id, customerDTO);
    }

    @Delete('id')
    removeCustomer(@Param('id') id: string) {
        return this.customersService.removeCustomer(id);
    }

}
