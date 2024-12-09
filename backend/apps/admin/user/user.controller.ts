import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { HistoryDto, UserCreateDto } from './user.dto';
import { UserService } from './user.service';
import { HistoryList, User, UserList } from './user.types';

@Controller('user')
export class UserController {
    constructor(private userServcie: UserService) {}

    @Post()
    @ApiOkResponse()
    async createUser(@Body() body: UserCreateDto): Promise<void> {
        await this.userServcie.create(body);
    }

    @Get('list')
    @ApiOkResponse({ type: UserList })
    async getUserList(): Promise<UserList> {
        const userList = await this.userServcie.getUserList();

        return { items: userList };
    }

    @Get(':id')
    @ApiOkResponse({ type: User })
    async getUserById(@Param('id') userId: number): Promise<User> {
        return await this.userServcie.getUserById(userId);
    }

    @Post('edit')
    @ApiOkResponse()
    async editUser(@Body() body: User): Promise<void> {
        await this.userServcie.editUser(body);
    }

    @Post('history')
    @ApiOkResponse()
    async addHistory(@Body() body: HistoryDto): Promise<void> {
        await this.userServcie.addHistory(body);
    }

    @Get('history/:id')
    @ApiOkResponse({ type: HistoryList })
    async historyList(@Param('id') userId: number): Promise<HistoryList> {
        return await this.userServcie.historyList(userId);
    }
}
