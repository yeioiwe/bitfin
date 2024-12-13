import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';
import { User, UserList, Wallet } from './user.types';

@Controller('user')
export class UserController {
    constructor(private userServcie: UserService) {}

    @UseGuards(JwtGuard)
    @Post()
    @ApiOkResponse()
    async createUser(@Body() dto: UserCreateDto): Promise<void> {
        await this.userServcie.create(dto);
    }

    @UseGuards(JwtGuard)
    @Get()
    @ApiOkResponse({ type: UserList })
    async getUsers(): Promise<UserList> {
        return await this.userServcie.getUserList();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    @ApiOkResponse({ type: User })
    async getUserById(@Param('id') userId: number): Promise<User> {
        return await this.userServcie.getUserById(userId);
    }

    @UseGuards(JwtGuard)
    @Get('wallet/:id')
    @ApiOkResponse({ type: Wallet })
    async historyList(@Param('id') userId: number): Promise<Wallet> {
        return await this.userServcie.getWallet(userId);
    }
}
