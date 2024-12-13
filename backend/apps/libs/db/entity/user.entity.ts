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

    @ApiProperty({ type: 'string', nullable: true })
    @Column({ type: String, nullable: true })
    name!: string | null;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    password!: string;

    // @ApiProperty({ type: 'number' })
    // @Column({ type: Number })
    // profit_24!: number;

    // @ApiProperty({ type: 'number' })
    // @Column({ type: Number })
    // profit_7!: number;

    // @ApiProperty({ type: 'number' })
    // @Column({ type: Number })
    // profit_1!: number;
}
