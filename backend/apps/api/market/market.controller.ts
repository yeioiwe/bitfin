import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { MarketService } from './market.service';
import { MarketList } from './market.types';

@Controller('market')
export class MarketController {
    constructor(private marketService: MarketService) {}

    @Get()
    @ApiOkResponse({ type: MarketList })
    async getMarkets(): Promise<MarketList> {
        return await this.marketService.getMarkets();
    }
}
