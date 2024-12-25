import { IsString } from 'nestjs-swagger-dto';

export class AuthDto {
    @IsString()
    login: string;

    @IsString()
    password: string;
}

export class NewAdminDto {
    @IsString()
    login: string;

    @IsString()
    password: string;
}
