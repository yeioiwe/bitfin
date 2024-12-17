import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketEntity } from 'apps/libs/db/entity/market.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MarketEntity])],
    providers: [],
    controllers: [],
})
export class MarketModule {}
