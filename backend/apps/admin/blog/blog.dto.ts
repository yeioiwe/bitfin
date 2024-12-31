import { IsNumber, IsString } from 'nestjs-swagger-dto';

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

    @IsString()
    avatar!: string;
}

export class CreateCommentDto {
    @IsString()
    name!: string;

    @IsString()
    date!: string;

    @IsNumber()
    postId!: number;

    @IsString()
    like!: string;

    @IsString()
    comment!: string;
}
