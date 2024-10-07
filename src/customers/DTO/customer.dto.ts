import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CustomerDto {
    @ApiProperty({ description: 'Nombre completo del cliente', example: 'Smith Jackson Biden Trump' })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({ description: 'Correo Electrónico del cliente', example: 'cliente12@gmail.com' })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({ description: 'Número Teléfonico del cliente de 10 digitos', example: '7381289384' })
    @IsString()
    readonly phone: string;

    @ApiProperty({ description: 'Domicilio del cliente', example: 'Calle Principal #123' })
    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @ApiProperty({ description: 'Edad del cliente', example: '32' })
    @IsNumber()
    @IsNotEmpty()
    readonly age: number;

    @ApiProperty({ description: 'Ciudad donde reside del cliente', example: 'Dallas' })
    @IsString()
    @IsNotEmpty()
    readonly city: string;

    @ApiProperty({ description: 'Género del cliente', example: 'Hombre' })
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
}