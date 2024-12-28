import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

@Entity('blog')
export class BlogEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: 'number' })
    id!: Default<number>;

    @Column('text')
    @ApiProperty()
    title!: string;

    @Column('text')
    @ApiProperty()
    date!: string;

    @Column('text')
    @ApiProperty()
    shortDescription!: string;

    @Column('mediumtext')
    @ApiProperty()
    content!: string;

    @Column('mediumtext')
    @ApiProperty()
    avatar!: string;

    @Column('text')
    @ApiProperty()
    like!: string;
}
