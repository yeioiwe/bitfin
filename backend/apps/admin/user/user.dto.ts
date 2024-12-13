import { IsNumber, IsString } from 'nestjs-swagger-dto';

export class UserCreateDto {
    @IsString()
    username!: string;

    @IsString()
    password!: string;

    @IsNumber()
    name!: string | null;
}

// TODO
export class HistoryDto {
    @IsNumber()
    userId!: number;

    @IsString()
    pair!: string;

    @IsString()
    date!: string;

    @IsNumber()
    profit!: number;
}
