import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ProductDto {
    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly price: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly stock: number;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly image: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly createdAt: Date;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly updatedAt: Date;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly status: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly sku: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly discount: number;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly supplir: string;

    @ApiProperty({ description: ''})
    @IsString()
    @IsNotEmpty()
    readonly stars: number;
}