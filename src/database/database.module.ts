import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Cart } from './entities/cart.entity'
//import { CartItem } from './entities/cartItem.entity'

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: "postgres",
                host: process.env.PG_HOST,
                port: +process.env.PG_PORT,
                username: process.env.PG_LOGIN,
                password: process.env.PG_PASS,
                database: process.env.PG_DB_NAME,
                entities: ['dist/database/entities/*.entity{.ts, .js}'],
                logging: true,
                namingStrategy: new SnakeNamingStrategy(),
                //migrationsRun: true,
                // migrations: ['dist/src/migrations/*{.ts, .js}'],
                
            }
        ),
        TypeOrmModule.forFeature([Cart])
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}