import { ApiProperty } from '@nestjs/swagger';
import { ExtendType } from 'apps/libs/db/db.tool';
import { BlogEntity } from 'apps/libs/db/entity/blog.entity';

export class BlogListItem extends ExtendType(BlogEntity, [
    'id',
    'date',
    'like',
    'shortDescription',
    'title',
    'avatar',
]) {}

export class BlogList {
    @ApiProperty({
        type: BlogListItem,
        isArray: true,
    })
    items!: BlogListItem[];
}

export class BlogItem extends BlogEntity {}
