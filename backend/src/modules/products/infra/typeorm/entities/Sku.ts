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
  title: string;

  @Column('integer')
  amount: number;

  @Column('integer')
  size_P: number;

  @Column('integer')
  size_M: number;

  @Column('integer')
  size_G: number;

  @Column('integer')
  size_GG: number;

  @Column()
  color: string;

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
