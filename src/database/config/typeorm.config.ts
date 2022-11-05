
import {
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT, 10),
  username: process.env.PG_LOGIN,
  database: process.env.PG_DB_NAME,
  password: process.env.PG_PASS,
  entities: [ 'src/database/entities/**/*{.ts, .js}'],
  migrations: ['src/database/seeds/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,

};