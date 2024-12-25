import { BadRequestException, Injectable } from '@nestjs/common';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { WalletEntity } from 'apps/libs/db/entity/wallet.entity';
import { Request } from 'express';
import { EntityManager } from 'typeorm';
import { HistoryDto, UserCreateDto } from './user.dto';
import { User, Wallet } from './user.types';

@Injectable()
export class UserService {
    constructor(private em: EntityManager) {}

    async create(dto: UserCreateDto, adminId: number) {
        const userExist = await this.em.findOneBy(UserEntity, { username: dto.username });

        if (userExist) throw new BadRequestException();

        const newUser = await this.em.create(UserEntity, {
            group: adminId,
            username: dto.username,
            password: dto.password,
            name: dto.name,
        });

        const user = await this.em.save(UserEntity, newUser);

        const wallet = await this.em.create(WalletEntity, { userId: user.id });
        await this.em.save(WalletEntity, wallet);
    }

    async getUserList(req: Request) {
        if (req.user.sub.root) {
            const userList = await this.em.find(UserEntity);
            return { items: userList };
        } else {
            const userList = await this.em.findBy(UserEntity, { group: req.user.id });
            return { items: userList };
        }
    }

    async getUserById(userId: number) {
        const user = await this.em.findOneBy(UserEntity, { id: userId });
        if (!user) throw new BadRequestException();

        return user;
    }

    async getWallet(userId: number) {
        const wallet = await this.em.findOneBy(WalletEntity, { userId: userId });
        if (!wallet) throw new BadRequestException();

        return wallet;
    }

    async editUser(dto: User) {
        const user = await this.em.findOneBy(UserEntity, { id: dto.id });

        if (!user) throw new BadRequestException();

        const newUserData = { ...dto };

        await this.em.save(UserEntity, newUserData);
    }

    async editWallet(dto: Wallet) {
        const wallet = await this.em.findOneBy(WalletEntity, { userId: dto.userId });

        if (!wallet) throw new BadRequestException();

        const newWalletData = { ...dto };

        await this.em.save(WalletEntity, newWalletData);
    }

    async historyList(id: number) {
        const history = await this.em.findBy(HistoryEntity, { userId: id });

        return { items: history };
    }

    async addHistory(dto: HistoryDto) {
        const history = await this.em.create(HistoryEntity, {
            userId: +dto.userId,
            date: dto.date,
            pair: dto.pair,
            profit: +dto.profit,
        });

        await this.em.save(HistoryEntity, history);
    }
}
