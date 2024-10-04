import { Injectable } from '@nestjs/common';
import { CustomerDto } from './DTO/customer.dto';

@Injectable()
export class CustomersService {
    constructor() {}

    findAllCustomers() {

    }

    findCustomerById(id: string) {

    }

    createCustomer(customer: CustomerDto) {

    }

    updateCustomer(id: string, customer: CustomerDto) {

    }

    removeCustomer(id: string) {

    }
    
}