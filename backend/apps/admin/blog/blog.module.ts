import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { CommentEntity } from 'apps/libs/db/entity/comment.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
    imports: [TypeOrmModule.forFeature([BlogEntity, CommentEntity]), JwtModule],
    providers: [BlogService],
    controllers: [BlogController],
})
export class BlogModule {}
