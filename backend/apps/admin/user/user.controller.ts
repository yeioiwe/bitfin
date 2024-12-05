import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServcie: UserService) {}

  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<void> {
    await this.userServcie.create(body);
  }
}
