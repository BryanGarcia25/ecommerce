import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from '../schema/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuditService } from 'src/audit/audit.service';
import { ProductDto } from '../DTO/product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private readonly productDocumentModel: Model<ProductDocument>,
        private readonly auditService: AuditService,
    ) {}

    findAllProducts() {
        return this.productDocumentModel.find();
    }

    async findProductById(id: string) {
        const productFound = await this.productDocumentModel.findById(id);

        if (!productFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        return productFound;
    }

    async createProduct(product: ProductDto) {
        const registeredProduct = await this.productDocumentModel.create(product);
        await this.auditService.logAction('create', 'products', registeredProduct._id.toString(), JSON.stringify(product));
        return registeredProduct;
    }

    async updateProduct(id: string, product: ProductDto) {
        const productFound = await this.productDocumentModel.findByIdAndUpdate(id, product, { new: true });

        if (!productFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        await this.auditService.logAction('update', 'products', id, JSON.stringify(product))

        return `Se actualizo el cliente con el id ${id} de manera correcta`;
    }

    async removeProduct(id: string) {
        const productFound = await this.productDocumentModel.findByIdAndDelete(id);

        if (!productFound) {
            return `El usuario con el id ${id} no existe en la base de datos`;
        }

        await this.auditService.logAction('delete', 'products', id, '{ }')

        return `Se elimino el cliente con el id ${id} de manera correcta`;
    }
}
