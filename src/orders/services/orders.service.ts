import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from '../schema/order.schema';
import { Model } from 'mongoose';
import { AuditService } from 'src/audit/audit.service';
import { OrderDto } from '../DTO/order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name) private readonly orderDocumentModel: Model<OrderDocument>,
        private readonly auditService: AuditService,
    ) {}

    async findOrderById(id: string) {
        const orderFound = await this.orderDocumentModel.findById(id);

        if (!orderFound) {
            return `El pedido con el id ${id} no se encuentra registrado`;            
        }

        return orderFound;
    }

    async createOrder(order: OrderDto) {
        const registeredOrder = await this.orderDocumentModel.create(order);
        await this.auditService.logAction('create', 'orders', registeredOrder._id.toString(), JSON.stringify(order))
    }

    async updateOrder(id: string, order: OrderDto) {
        const orderFound = await this.orderDocumentModel.findByIdAndUpdate(id, order, { new: true });

        if (!orderFound) {
            return `El pedido con el id ${id} no se encuentra registrado`;
        }

        await this.auditService.logAction('update', 'orders', id, JSON.stringify(order))

        return `Se actualizo el pedido con el id ${id} de manera correcta`;
    }

    async removeOrder(id: string) {
        const orderFound = await this.orderDocumentModel.findByIdAndDelete(id);

        if (!orderFound) {
            return `El pedido con el id ${id} no se encuentra registrado`;
        }

        await this.auditService.logAction('delete', 'orders', id, '{ }')

        return `Se elimino el pedido con el id ${id} de manera correcta`;
    }
}
