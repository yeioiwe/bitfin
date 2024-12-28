import { BadRequestException, Injectable } from '@nestjs/common';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { EntityManager } from 'typeorm';
import { CreateBlogDto } from './blog.dto';
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
}
