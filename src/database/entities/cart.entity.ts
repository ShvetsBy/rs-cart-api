import {Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { CartItem } from './cartItem.entity';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'date', nullable: false})
    created_at: Date;

    @Column({type: 'date', nullable: false})
    updated_at: Date;

    @OneToMany(() => CartItem, items => items.cart)
    @JoinColumn()
    cart_item: CartItem[];
}



