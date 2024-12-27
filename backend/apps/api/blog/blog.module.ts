import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
    imports: [TypeOrmModule.forFeature([BlogEntity])],
    providers: [BlogService],
    controllers: [BlogController],
})
export class BlogModule {}
