import { Inject, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto';
import { NumericType, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryClienteDto } from './dto/pagination-querycliente.dto';

@Injectable()
export class ClienteService {
   
    constructor(
        @Inject('CLIENTE_REPOSITORY')
        private clienteRepository: Repository<Cliente>,
      ) {}

    getCliente(dniNumber:number):Promise<Cliente>{
        return this.clienteRepository.findOne({
            select: {
                dni : true,
                nombre:true
            },
            where: {
                dni: dniNumber
            }
        });
    }
    async getClientes(query:PaginationQueryClienteDto):Promise<Cliente[]>{
        return this.clienteRepository.find({
            select: {
                dni : true,
                nombre:true
            },
            skip : query.offset,
            take : query.limit
        });
    }
    postCliente(cliente:CreateClienteDto){
        const clientdb = this.clienteRepository.create({
            dni: cliente.dni,
            nombre: cliente.nombre,
        })
        this.clienteRepository.save(clientdb);
    }
}
