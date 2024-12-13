import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';
import { UserList } from './user.types';

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

    // ??????????

    // @Get('history/:id')
    // @ApiOkResponse({ type: HistoryList })
    // async historyList(@Param('id') userId: number): Promise<HistoryList> {
    //     return await this.userServcie.historyList(userId);
    // }
}
