import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CustomerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsPhoneNumber()
    readonly phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly age: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly gender: string;
}