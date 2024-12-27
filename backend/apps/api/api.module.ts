import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { MarketController } from './market/market.controller';
import { MarketModule } from './market/market.module';
import { MarketService } from './market/market.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DbModule,
        AuthModule,
        AuthModule,
        UserModule,
        MarketModule,
        BlogModule,
    ],
    controllers: [MarketController],
    providers: [MarketService],
})
export class ApiModule {}
