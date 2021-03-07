import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  PrimaryColumn,
} from 'typeorm';

@Entity('categories')
@Unique(['code', 'description'])
class Category {
  @PrimaryColumn({
    length: 4,
    type: 'text',
  })
  code: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Category;
