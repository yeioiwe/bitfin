import { Injectable } from '@nestjs/common';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { EntityManager } from 'typeorm';
import { CreateBlogDto } from './blog.dto';

@Injectable()
export class BlogService {
    constructor(private em: EntityManager) {}

    async createPost(dto: CreateBlogDto) {
        const newPost = await this.em.create(BlogEntity, {
            ...dto,
        });

        await this.em.save(BlogEntity, newPost);
    }

    async getBlogList() {
        const blogList = await this.em.find(BlogEntity);

        return blogList.map(p => {
            return { ...p, content: undefined };
        });
    }
}
