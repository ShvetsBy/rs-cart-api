import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

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
                entities: [],
                logging: true,
                namingStrategy: new SnakeNamingStrategy()

            }
        ),
        TypeOrmModule.forFeature([])
    ],
    exports: [],
})
export class DatabaseModule {}