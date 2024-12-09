import { BadRequestException, Injectable } from '@nestjs/common';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { EntityManager } from 'typeorm';
import { HistoryDto, UserCreateDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private em: EntityManager) {}

    async create(dto: UserCreateDto) {
        const user = await this.em.create(UserEntity, {
            username: dto.username,
            password: dto.password,
            balance: dto.balance,
            profit_1: 0,
            profit_24: 0,
            profit_7: 0,
        });

        await this.em.save(UserEntity, user);
    }

    async getUserList() {
        const userList = await this.em.find(UserEntity);

        return userList;
    }

    async getUserById(userId: number) {
        const user = await this.em.findOneBy(UserEntity, { id: userId });

        if (!user) throw new BadRequestException();

        return user;
    }

    async editUser(body: UserEntity) {
        const user = await this.em.findOneBy(UserEntity, { id: body.id });

        if (!user) throw new BadRequestException();

        await this.em.save(UserEntity, { ...body });
    }

    async addHistory(dto: HistoryDto) {
        const historyItem = await this.em.create(HistoryEntity, dto);

        await this.em.save(HistoryEntity, historyItem);
    }

    async historyList(userId: number) {
        const history = await this.em.findBy(HistoryEntity, { userId });

        return { items: history };
    }
}
