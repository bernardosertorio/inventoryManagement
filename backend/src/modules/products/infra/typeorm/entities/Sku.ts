import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Product from './Product';

@Entity('sku')
class Sku {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: string;

  @Column()
  sizes: string;

  @Column()
  colors: string;

  @Column()
  materials: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sku;
