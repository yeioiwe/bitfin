import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { WalletEntity } from 'apps/libs/db/entity/wallet.entity';
import { EntityManager } from 'typeorm';
import { UserCreateDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(private em: EntityManager) {}

    async create(dto: UserCreateDto) {
        const userExist = await this.em.findOneBy(UserEntity, { username: dto.username });

        if (userExist) throw new BadRequestException();

        const newUser = await this.em.create(UserEntity, {
            username: dto.username,
            password: dto.password,
            name: dto.name,
        });

        const user = await this.em.save(UserEntity, newUser);

        const wallet = await this.em.create(WalletEntity, { userId: user.id });
        await this.em.save(WalletEntity, wallet);
    }

    async getUserList() {
        const userList = await this.em.find(UserEntity);

        return { items: userList };
    }

    //TODO ?????????????????????????

    // async getUserById(userId: number) {
    //     const user = await this.em.findOneBy(UserEntity, { id: userId });

    //     if (!user) throw new BadRequestException();

    //     return user;
    // }

    // async editUser(body: UserEntity) {
    //     const user = await this.em.findOneBy(UserEntity, { id: body.id });

    //     if (!user) throw new BadRequestException();

    //     await this.em.save(UserEntity, { ...body });
    // }

    // async addHistory(dto: HistoryDto) {
    //     const historyItem = await this.em.create(HistoryEntity, dto);

    //     await this.em.save(HistoryEntity, historyItem);
    // }

    // async historyList(userId: number) {
    //     const history = await this.em.findBy(HistoryEntity, { userId });

    //     return { items: history };
    // }
}
