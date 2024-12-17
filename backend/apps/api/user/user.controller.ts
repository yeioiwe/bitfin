import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    // @UseGuards(JwtGuard)
    // @Get()
    // @ApiOkResponse({ type: User })
    // async getUser(@Req() request: Request): Promise<User> {
    //     return await this.userService.getUser(request.user.id);
    // }

    // @UseGuards(JwtGuard)
    // @Get('history')
    // @ApiOkResponse({ type: HistoryList })
    // async getHistory(@Req() request: Request): Promise<HistoryList> {
    //     return await this.userService.getHistory(request.user.id);
    // }
}
