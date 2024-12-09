import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthModule } from './auth/auth.module';
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
    ],
    controllers: [],
    providers: [],
})
export class ApiModule {}
