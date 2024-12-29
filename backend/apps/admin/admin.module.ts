import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DbModule,
        UserModule,
        AuthModule,
        JwtModule,
        BlogModule,
        ThrottlerModule.forRoot({
            throttlers: [{ limit: 60, ttl: 60 }],
        }),
    ],
    controllers: [AuthController],
    providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }, AuthService],
})
export class AdminModule {}
