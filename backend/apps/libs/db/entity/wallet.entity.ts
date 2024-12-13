import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('wallet')
export class WalletEntity {
    @PrimaryColumn({ type: Number })
    @ApiProperty({ type: 'number' })
    userId!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    USDT!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    BTC!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    XRP!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    BNB!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    DOGE!: number;

    @ApiProperty({ type: 'number' })
    @Column({ type: Number, default: 0 })
    SOL!: number;
}
