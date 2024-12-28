import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateBlogDto } from './blog.dto';
import { BlogService } from './blog.service';
import { BlogItem, BlogList } from './blog.types';

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) {}

    @UseGuards(JwtGuard)
    @Post()
    @ApiOkResponse()
    async createPost(@Body() dto: CreateBlogDto): Promise<void> {
        await this.blogService.createPost(dto);
    }

    @UseGuards(JwtGuard)
    @Get('list')
    @ApiOkResponse({ type: BlogList })
    async getBlogList(): Promise<BlogList> {
        const blogList = await this.blogService.getBlogList();

        return { items: blogList };
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    @ApiOkResponse({ type: BlogItem })
    async getPost(@Param('id') postId: number): Promise<BlogItem> {
        return await this.blogService.getPost(postId);
    }

    @UseGuards(JwtGuard)
    @Post('edit')
    @ApiOkResponse()
    async editPost(@Body() dto: BlogItem): Promise<void> {
        await this.blogService.editPost(dto);
    }
}
