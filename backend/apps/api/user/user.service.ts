import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
    constructor(private em: EntityManager) {}

    // async getUser(userId: number): Promise<User> {
    //     const user = await this.em.findOneBy(UserEntity, { id: userId });

    //     if (!user) throw new BadRequestException();

    //     return { ...user, password: undefined };
    // }

    // async getHistory(userId: number): Promise<HistoryList> {
    //     const history = await this.em.findBy(HistoryEntity, { userId });

    //     return { items: history };
    // }
}
