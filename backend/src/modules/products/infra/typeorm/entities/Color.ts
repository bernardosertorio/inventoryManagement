import {
  Entity,
  Column,
  PrimaryColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('colors')
@Unique(['code', 'description'])
class Color {
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

export default Color;
