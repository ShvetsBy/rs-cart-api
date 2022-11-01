import { ApiProperty } from "@nestjs/swagger";
import { CartItem } from "../models";

export class CreateCartDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    items: CartItem[];
    
}