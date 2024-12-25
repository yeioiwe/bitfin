import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { HistoryDto, UserCreateDto } from './user.dto';
import { UserService } from './user.service';
import { HistoryList, User, UserList, Wallet } from './user.types';

@Controller('user')
export class UserController {
    constructor(private userServcie: UserService) {}

    @UseGuards(JwtGuard)
    @Post()
    @ApiOkResponse()
    async createUser(@Body() dto: UserCreateDto, @Req() req: Request): Promise<void> {
        await this.userServcie.create(dto, req.user.id);
    }

    @UseGuards(JwtGuard)
    @Get()
    @ApiOkResponse({ type: UserList })
    async getUsers(@Req() req: Request): Promise<UserList> {
        return await this.userServcie.getUserList(req);
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
    async wallet(@Param('id') userId: number): Promise<Wallet> {
        return await this.userServcie.getWallet(userId);
    }

    @UseGuards(JwtGuard)
    @Post('edit')
    @ApiOkResponse()
    async edit(@Body() dto: User): Promise<void> {
        return await this.userServcie.editUser(dto);
    }

    @UseGuards(JwtGuard)
    @Post('edit/wallet')
    @ApiOkResponse()
    async editWallet(@Body() dto: Wallet): Promise<void> {
        return await this.userServcie.editWallet(dto);
    }

    @UseGuards(JwtGuard)
    @Get('history/:id')
    @ApiOkResponse({ type: HistoryList })
    async historyList(@Param('id') userId: number): Promise<HistoryList> {
        return await this.userServcie.historyList(userId);
    }

    @UseGuards(JwtGuard)
    @Post('history')
    @ApiOkResponse()
    async addHistory(@Body() dto: HistoryDto): Promise<void> {
        return await this.userServcie.addHistory(dto);
    }
}
