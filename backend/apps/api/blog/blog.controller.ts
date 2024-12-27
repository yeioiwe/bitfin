import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { BlogItem, BlogList } from './blog.types';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @Get()
    @ApiOkResponse({ type: BlogList })
    async getList(): Promise<BlogList> {
        const blogList = await this.blogService.getList();
        return { items: blogList };
    }

    @Get(':id')
    @ApiOkResponse({ type: BlogItem })
    async getPost(@Param('id') postId: number): Promise<BlogItem> {
        return await this.blogService.getPost(postId);
    }
}
