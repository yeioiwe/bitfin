import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: 'number' })
    id!: Default<number>;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    username!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    name!: string;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number })
    group!: number;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    password!: string;
}
