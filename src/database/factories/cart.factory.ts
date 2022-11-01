import { define } from "typeorm-seeding";
import { Cart } from "../entities/cart.entity";
import { v4 } from 'uuid'

define(Cart, () => {
    const cart = new Cart();
    cart.id = v4();
    return cart;
})