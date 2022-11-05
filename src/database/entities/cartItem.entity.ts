import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Cart } from './cart.entity';

@Entity()
export class CartItem {
    @Column()
    id: string;

    @Column()
    product_id: string;

    @Column()
    count: number;

    @ManyToOne(() => Cart)
    @JoinColumn({name: 'id'})
    cart: Cart;

}



