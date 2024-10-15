import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../service/products.service';
import { CustomerDto } from 'src/customers/DTO/customer.dto';
import { ProductDto } from '../DTO/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    @ApiOperation({ summary: 'Endpoint para obtener todos los productos registrados' })
    @ApiResponse({ status: 200, description: 'Productos obtenidos con éxito' })
    findAllCustomers() {
        return this.productService.findAllProducts();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Endpoint para obtener un producto en específico mediante su id' })
    @ApiParam({ name: 'id', description: 'ID del producto' })
    @ApiResponse({ status: 200, description: 'Producto obtenido con éxito' })
    @ApiResponse({ status: 404, description: 'El producto no existe' })
    findCustomerById(@Param('id') id: string) {
        return this.productService.findProductById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Endpoint para registrar un producto nuevo' })
    @ApiResponse({ status: 201, description: 'Producto registrado con éxito' })
    createCustomer(@Body(new ValidationPipe()) productDto: ProductDto) {
        return this.productService.createProduct(productDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint para actualizar un producto en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del producto' })
    @ApiResponse({ status: 201, description: 'Producto actualizado con éxito' })
    @ApiResponse({ status: 404, description: 'El producto no existe' })
    updateCustomer(@Param('id') id: string, @Body(new ValidationPipe()) productDto: ProductDto) {
        return this.productService.updateProduct(id, productDto);
    }

    @Delete('id')
    @ApiOperation({ summary: 'Endpoint para eliminar un producto en específico por medio de su id' })
    @ApiParam({ name: 'id', description: 'ID del producto' })
    @ApiResponse({ status: 201, description: 'Producto eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'El producto no existe' })
    removeCustomer(@Param('id') id: string) {
        return this.productService.removeProduct(id);
    }
}
