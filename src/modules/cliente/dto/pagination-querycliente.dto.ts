import { IsNumber, IsOptional, IsPositive, isPositive } from "class-validator";



export class PaginationQueryClienteDto{ 
   
    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit:number;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset:number;
}