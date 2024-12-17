import { ApiProperty } from '@nestjs/swagger';
import { MarketEntity } from 'apps/libs/db/entity/market.entity';

export class MarketItem extends MarketEntity {}

export class MarketList {
    @ApiProperty({ type: MarketItem, isArray: true })
    items!: MarketItem[];
}
