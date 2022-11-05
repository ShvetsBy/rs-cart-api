import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Cart } from './cart.entity';

@Entity()
export class CartItem {
    @Column()
    cart_id: string;

    @Column()
    product_id: string;

    @Column()
    count: number;

    @OneToMany(() => Cart, {nullable: false})
    @JoinColumn({name: 'cart_id', referencedColumnName: 'id'})
    cart: Cart;

}



