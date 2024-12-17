import { IsString } from 'nestjs-swagger-dto';

export class UserCreateDto {
    @IsString()
    username!: string;

    @IsString()
    password!: string;

    @IsString()
    name!: string;
}

export class HistoryDto {
    @IsString()
    userId!: string;

    @IsString()
    pair!: string;

    @IsString()
    date!: string;

    @IsString()
    profit!: string;
}
