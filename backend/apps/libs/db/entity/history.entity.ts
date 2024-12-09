import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

@Entity('history')
export class HistoryEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: 'number' })
    id!: Default<number>;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number })
    userId!: number;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    pair!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    date!: string;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number })
    profit!: number;
}
