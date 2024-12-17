import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

export enum MarketStatus {
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    DISABLED = 'DISABLED',
}

@Entity('market')
export class MarketEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: 'number' })
    id!: Default<number>;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    currency!: string;

    @ApiProperty({ enum: MarketStatus, default: MarketStatus.ACTIVE })
    @Column({ type: 'enum', enum: MarketStatus, default: MarketStatus.ACTIVE })
    status!: MarketStatus;

    @ApiProperty({ type: 'string' })
    @Column({ type: String })
    price!: string;
}
