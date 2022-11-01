import {Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Cart {
    @PrimaryColumn('uuid')
    id: string;

    @Column({type: 'date', nullable: false})
    created_at: Date;

    @Column({type: 'date', nullable: false})
    updated_at: Date;
}



