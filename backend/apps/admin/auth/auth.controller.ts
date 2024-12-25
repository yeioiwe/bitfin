import { BadRequestException, Body, Controller, Get, NotFoundException, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthDto, NewAdminDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AdminList, AdminType, AuthResponse } from './auth.types';
import { JwtGuard } from './guard/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOkResponse({ type: AuthResponse })
    async login(@Body() body: AuthDto): Promise<AuthResponse> {
        const rv = await this.authService.login(body);
        if (!rv) throw new NotFoundException();

        return rv;
    }

    @UseGuards(JwtGuard)
    @Get('me')
    @ApiOkResponse({ type: AdminType })
    async getMe(@Req() req: Request): Promise<AdminType> {
        return await this.authService.getMe(req.user.id);
    }

    @UseGuards(JwtGuard)
    @Post('new')
    @ApiOkResponse()
    async newAdmin(@Req() req: Request, @Body() body: NewAdminDto) {
        if (!req.user.sub.root) throw new BadRequestException();

        await this.authService.newAdmin(body);
    }

    @UseGuards(JwtGuard)
    @Get('admin/list')
    @ApiOkResponse({ type: AdminList })
    async getAdminList(@Req() req: Request) {
        if (!req.user.sub.root) throw new BadRequestException();

        return await this.authService.getAdminList();
    }
}
