// import { User } from './user.entity';
// import { Product } from './../../products/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  // user: User;
  user: string;

  @Column()
  // products: Product[];
  products: string;
}
