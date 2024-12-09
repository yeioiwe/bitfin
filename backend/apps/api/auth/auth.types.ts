import { IsString } from 'nestjs-swagger-dto';

export class AuthType {
    @IsString()
    access_token: string;
}
