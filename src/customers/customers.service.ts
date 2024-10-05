import { Injectable } from '@nestjs/common';
import { CustomerDto } from './DTO/customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './customer.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomersService {
    constructor(@InjectModel(Customer.name) private readonly customerDocumentModel: Model<CustomerDocument>) {}

    findAllCustomers() {
        return this.customerDocumentModel.find();
    }

    async findCustomerById(id: string) {
        const customerFound = await this.customerDocumentModel.findById(id);

        if (!customerFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        return customerFound;
    }

    createCustomer(customer: CustomerDto) {
        return this.customerDocumentModel.create(customer);
    }

    async updateCustomer(id: string, customer: CustomerDto) {
        const customerFound = await this.customerDocumentModel.findByIdAndUpdate(id, customer, { new: true });

        if (!customerFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        return `Se actualizo el cliente con el id ${id} de manera correcta`;
    }

    async removeCustomer(id: string) {
        const customerFound = await this.customerDocumentModel.findByIdAndDelete(id);

        if (!customerFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }
    }
    
}