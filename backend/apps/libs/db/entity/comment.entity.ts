import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Default } from '../db.tool';

@Entity('comment')
export class CommentEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ type: 'number' })
    id!: Default<number>;

    @Column({ type: Number })
    @ApiProperty({ type: 'number' })
    postId!: number;

    @Column({ type: String })
    @ApiProperty({ type: 'string' })
    name!: string;

    @Column({ type: String })
    @ApiProperty({ type: 'string' })
    date!: string;

    @Column({ type: String })
    @ApiProperty({ type: 'string' })
    like!: string;

    @Column({ type: String })
    @ApiProperty({ type: 'string' })
    comment!: string;
}
