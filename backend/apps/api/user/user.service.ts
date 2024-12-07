import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private em: EntityManager) {}

  async getUser(userId: number) {
    const user = await this.em.findOneBy(UserEntity, { id: userId });

    if (!user) throw new BadRequestException();

    console.log({ user });
    return { ...user, password: undefined };
  }
}
