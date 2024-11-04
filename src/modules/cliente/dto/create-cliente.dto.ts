import { IsString,IsNumber } from "class-validator";

export class CreateClienteDto {
    @IsNumber()
    readonly dni: number;
    @IsString()
    readonly nombre : string;
}
