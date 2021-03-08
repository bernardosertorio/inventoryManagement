import {
  Entity,
  Column,
  PrimaryColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('models')
@Unique(['code', 'description'])
class Model {
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

export default Model;
