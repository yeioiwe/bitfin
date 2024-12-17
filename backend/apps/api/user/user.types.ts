import { ExtendType } from 'apps/libs/db/db.tool';
import { UserEntity } from 'apps/libs/db/entity/user.entity';

export class User extends ExtendType(UserEntity, ['id', 'username']) {}
