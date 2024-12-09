import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthType } from './auth.types';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOkResponse({ type: AuthType })
    async login(@Body() body: AuthDto): Promise<AuthType> {
        return this.authService.login(body);
    }
}
