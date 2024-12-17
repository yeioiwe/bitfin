import { ApiProperty } from '@nestjs/swagger';
import { HistoryEntity } from 'apps/libs/db/entity/history.entity';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { WalletEntity } from 'apps/libs/db/entity/wallet.entity';

export class User extends UserEntity {}

export class UserList {
    @ApiProperty({ type: User, isArray: true })
    items!: User[];
}

export class Wallet extends WalletEntity {}

export class HistoryItem extends HistoryEntity {}

export class HistoryList {
    @ApiProperty({ type: HistoryItem, isArray: true })
    items!: HistoryItem[];
}
