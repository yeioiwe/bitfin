import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateBlogDto, CreateCommentDto } from './blog.dto';
import { BlogService } from './blog.service';
import { BlogItem, BlogList, CommentList } from './blog.types';

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

    @UseGuards(JwtGuard)
    @Post('delete/:id')
    @ApiOkResponse()
    async deletePost(@Param('id') postId: number): Promise<void> {
        await this.blogService.deletePost(postId);
    }

    @UseGuards(JwtGuard)
    @Post('comment')
    @ApiOkResponse()
    async createComment(@Body() dto: CreateCommentDto): Promise<void> {
        await this.blogService.cerateComment(dto);
    }

    @UseGuards(JwtGuard)
    @Get('comment/:id')
    @ApiOkResponse({ type: CommentList })
    async getComment(@Param('id') postId: number): Promise<CommentList> {
        return await this.blogService.getCommentList(postId);
    }

    @UseGuards(JwtGuard)
    @Post('comment/:id')
    @ApiOkResponse()
    async deleteComment(@Param('id') commentId: number): Promise<void> {
        await this.blogService.deleteComment(commentId);
    }
}
