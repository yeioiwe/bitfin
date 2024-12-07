import { Injectable } from '@nestjs/common';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { EntityManager } from 'typeorm';
import { UserCreateDto } from './user.dto';

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
}
