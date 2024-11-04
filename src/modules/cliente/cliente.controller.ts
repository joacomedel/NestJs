import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto';
import { stringify } from 'querystring';
import { Cliente } from './cliente.entity';
import { query } from 'express';
import { PaginationQueryClienteDto } from './dto/pagination-querycliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get(':dni')
    getCliente(@Param("dni") dni:number):Promise<Cliente>{
        return this.clienteService.getCliente(dni);
    }
    @Get()
    getClientes(@Query() query: PaginationQueryClienteDto):Promise<Cliente[]>{
        return this.clienteService.getClientes(query);
    }


    

    @Post()
    createCliente(@Body() cliente:CreateClienteDto ):void {
        this.clienteService.postCliente(cliente);
    }
}
