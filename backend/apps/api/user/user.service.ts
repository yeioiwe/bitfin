import { BadRequestException, Injectable } from '@nestjs/common';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { WalletEntity } from 'apps/libs/db/entity/wallet.entity';
import { EntityManager } from 'typeorm';
import { HistoryList, User, WalletItem } from './user.types';

@Injectable()
export class UserService {
    constructor(private em: EntityManager) {}

    async getUser(userId: number): Promise<User> {
        const user = await this.em.findOneBy(UserEntity, { id: userId });

        if (!user) throw new BadRequestException();

        return { ...user, password: undefined };
    }

    async getHistory(userId: number): Promise<HistoryList> {
        const history = await this.em.findBy(HistoryEntity, { userId });

        return { items: history };
    }

    async getWallet(userId: number): Promise<WalletItem> {
        const wallet = await this.em.findOneBy(WalletEntity, { userId });
        if (!wallet) throw new BadRequestException();

        return wallet;
    }
}
