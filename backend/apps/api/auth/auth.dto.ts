import { IsString } from 'nestjs-swagger-dto';

export class AuthDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
