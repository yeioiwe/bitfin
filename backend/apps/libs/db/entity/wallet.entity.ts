import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('wallet')
export class WalletEntity {
    @PrimaryColumn({ type: Number })
    @ApiProperty({ type: 'number' })
    userId!: number;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    USDT!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    BTC!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    XRP!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    BNB!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    DOGE!: string;

    @ApiProperty({ type: 'string' })
    @Column({ type: String, default: 0 })
    SOL!: string;
}
