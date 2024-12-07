import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'apps/libs/db/entity/user.entity';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServcie: UserService) {}

  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<void> {
    await this.userServcie.create(body);
  }

  @Get('list')
  async getUserList() {
    const userList = await this.userServcie.getUserList();

    return { users: userList };
  }

  @Post('id')
  async getUserById(@Body() body: { id: number }) {
    return await this.userServcie.getUserById(body.id);
  }

  @Post('edit')
  async editUser(@Body() body: UserEntity) {
    await this.userServcie.editUser(body);
  }
}
