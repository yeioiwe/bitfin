import { Injectable, OnModuleInit } from '@nestjs/common';
import { MarketEntity, MarketStatus } from 'apps/libs/db/entity/market.entity';
import axios from 'axios';
import { EntityManager } from 'typeorm';

const marketsList: string[] = ['BTC', 'XRP', 'BNB', 'DOGE', 'SOL'] as const;

@Injectable()
export class MarketService implements OnModuleInit {
    constructor(private em: EntityManager) {}

    onModuleInit() {
        this.seedMarkets();
        this.updateMarkets().catch(e => console.log(e));
        setInterval(
            () => {
                this.updateMarkets().catch(e => console.log(e));
            },
            1 * 60 * 1000,
        );
    }

    async updateMarkets() {
        for (const currency of marketsList) {
            const market = await this.em.findOneBy(MarketEntity, { currency });

            if (!market) return;

            const price = await this.getMarketPrice(currency);

            console.log('price update', currency, price);
            await this.em.save(MarketEntity, { ...market, price });
        }
    }

    async getMarketPrice(currency: string): Promise<string | null> {
        try {
            const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${currency}USDT`);

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(response.data.price);
                }, 1000);
            });
        } catch (error) {
            console.log('get market price error', error);
            return null;
        }
    }

    async seedMarkets() {
        const marketsExist = await this.em.exists(MarketEntity);

        if (marketsExist) return;

        for (const currency of marketsList) {
            const price = await this.getMarketPrice(currency);

            const market = this.em.create(MarketEntity, {
                currency,
                price: price || '0',
                status: MarketStatus.ACTIVE,
            });

            await this.em.save(MarketEntity, market);
        }

        const usdtMarket = this.em.create(MarketEntity, {
            currency: 'USDT',
            price: '1',
            status: MarketStatus.ACTIVE,
        });

        await this.em.save(MarketEntity, usdtMarket);

        const rubMarket = this.em.create(MarketEntity, {
            currency: 'RUB',
            price: '100',
            status: MarketStatus.ACTIVE,
        });

        await this.em.save(MarketEntity, rubMarket);
    }

    async getMarkets() {
        const markets = await this.em.find(MarketEntity);

        return { items: markets };
    }
}
