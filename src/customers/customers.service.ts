import { Injectable } from '@nestjs/common';
import { CustomerDto } from './DTO/customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './customer.schema';
import { Model } from 'mongoose';
import { AuditService } from 'src/audit/audit.service';

@Injectable()
export class CustomersService {
    constructor(
        @InjectModel(Customer.name) private readonly customerDocumentModel: Model<CustomerDocument>,
        private readonly auditService: AuditService
    ) {}

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

    async createCustomer(customer: CustomerDto, userId: string) {
        const registeredClient = await this.customerDocumentModel.create(customer);
        await this.auditService.logAction('create', 'customers', registeredClient._id as string, userId, JSON.stringify(customer))
        return registeredClient;
    }

    async updateCustomer(id: string, customer: CustomerDto, userId: string) {
        const customerFound = await this.customerDocumentModel.findByIdAndUpdate(id, customer, { new: true });

        if (!customerFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        await this.auditService.logAction('update', 'customers', id, userId, JSON.stringify(customer))

        return `Se actualizo el cliente con el id ${id} de manera correcta`;
    }

    async removeCustomer(id: string, userId: string) {
        const customerFound = await this.customerDocumentModel.findByIdAndDelete(id);

        if (!customerFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        await this.auditService.logAction('delete', 'customers', id, userId, '{ }')

        return `Se elimino el cliente con el id ${id} de manera correcta`;
    }
    
}