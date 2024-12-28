import { Injectable } from '@nestjs/common';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(private em: EntityManager) {}

    async getList() {
        const blogList = await this.em.find(BlogEntity, { order: { id: 'DESC' } });

        return blogList.map(p => {
            return { ...p, content: undefined };
        });
    }

    async getPost(id: number) {
        const post = await this.em.findOneBy(BlogEntity, { id });

        return post;
    }
}
