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
    });

    await this.em.save(UserEntity, user);
  }
}
