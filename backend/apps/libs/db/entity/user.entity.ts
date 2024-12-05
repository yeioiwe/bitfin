import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: Default<number>;

  @Column({ type: Number })
  balance!: number;

  @Column({ type: String })
  username!: string;

  @Column({ type: String })
  password!: string;
}
