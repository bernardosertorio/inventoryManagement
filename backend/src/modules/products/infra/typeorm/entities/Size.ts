import {
  Entity,
  Column,
  PrimaryColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sizes')
@Unique(['code', 'description'])
class Size {
  @PrimaryColumn({
    length: 4,
  })
  code: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Size;
