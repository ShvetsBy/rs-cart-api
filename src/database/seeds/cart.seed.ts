import { DataSource } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { Cart } from '../entities/cart.entity';
import { v4 } from 'uuid';
export class CartCreateSeed implements Seeder {
    public async run (factory: Factory, connection: DataSource):Promise<void>{
        //await factory(Cart)().create();

        await connection
      .createQueryBuilder()
      .insert()
      .into(Cart)
      .values([
        { id: v4(), created_at: new Date(), updated_at: new Date()  },
        { id: v4(), created_at: new Date(), updated_at: new Date()   },
      ])
      .execute()
  }
   
}
