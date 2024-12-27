import { IsString } from 'nestjs-swagger-dto';

export class CreateBlogDto {
    @IsString()
    title!: string;

    @IsString()
    date!: string;

    @IsString()
    shortDescription!: string;

    @IsString()
    content!: string;

    @IsString()
    like!: string;
}
