import { BadRequestException, Injectable } from '@nestjs/common';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { CommentEntity } from 'apps/libs/db/entity/comment.entity';
import { EntityManager } from 'typeorm';
import { CreateBlogDto, CreateCommentDto } from './blog.dto';
import { BlogItem } from './blog.types';

@Injectable()
export class BlogService {
    constructor(private em: EntityManager) {}

    async createPost(dto: CreateBlogDto) {
        const newPost = await this.em.create(BlogEntity, {
            title: dto.title,
            shortDescription: dto.shortDescription,
            like: dto.like.toString(),
            date: dto.date.toString(),
            avatar: dto.avatar,
            content: dto.content,
        });

        await this.em.save(BlogEntity, newPost);
    }

    async getBlogList() {
        const blogList = await this.em.find(BlogEntity, { order: { id: 'DESC' } });

        return blogList.map(p => {
            return { ...p, content: undefined, avatar: undefined };
        });
    }

    async getPost(id: number) {
        const post = await this.em.findOneBy(BlogEntity, { id });

        return post;
    }

    async editPost(dto: BlogItem) {
        const post = this.em.findOneBy(BlogEntity, { id: dto.id });

        if (!post) throw new BadRequestException();

        await this.em.update(BlogEntity, { id: dto.id }, { ...dto });
    }

    async deletePost(postId: number) {
        await this.em.delete(BlogEntity, { id: postId });
    }

    async cerateComment(dto: CreateCommentDto) {
        const comment = await this.em.create(CommentEntity, { ...dto });

        await this.em.save(CommentEntity, comment);
    }

    async deleteComment(id: number) {
        await this.em.delete(CommentEntity, { id });
    }

    async getCommentList(id: number) {
        const postList = await this.em.findBy(CommentEntity, { postId: id });

        return { items: postList };
    }
}
