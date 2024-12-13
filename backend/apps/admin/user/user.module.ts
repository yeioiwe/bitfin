import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { WalletEntity } from 'apps/libs/db/entity/wallet.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, HistoryEntity, WalletEntity]), JwtModule],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
