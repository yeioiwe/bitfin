import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { UserService } from './user.service';
import { HistoryList, User, WalletItem } from './user.types';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtGuard)
    @Get()
    @ApiOkResponse({ type: User })
    async getOne(@Req() request: Request): Promise<User> {
        return await this.userService.getUser(request.user.id);
    }

    @UseGuards(JwtGuard)
    @Get('wallet')
    @ApiOkResponse({ type: WalletItem })
    async getWallet(@Req() request: Request): Promise<WalletItem> {
        return await this.userService.getWallet(request.user.id);
    }

    @UseGuards(JwtGuard)
    @Get('history')
    @ApiOkResponse({ type: HistoryList })
    async getHistory(@Req() request: Request): Promise<HistoryList> {
        return await this.userService.getHistory(request.user.id);
    }
}
