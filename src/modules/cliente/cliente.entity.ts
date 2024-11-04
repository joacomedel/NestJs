import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryColumn()
    dni:number;

    @Column()
    nombre:string;
}
