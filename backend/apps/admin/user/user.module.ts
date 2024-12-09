import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, HistoryEntity])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
