'use client';
import { BlogListItem } from '@/config/api/api.schemas';
import { useBlogGetBlogList } from '@/config/api/blog/blog';
import { Col, Row } from '@/config/boxes';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export const BlogMain = () => {
    const { data: blog } = useBlogGetBlogList();

    return (
        <Col gap={4} width={'100%'}>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Link href={'/newblog'}>
                    <Button variant="contained">Добавить пост</Button>
                </Link>
            </Box>

            <Typography>Список постов:</Typography>

            <Col gap={2}>
                {blog?.items.map((b, i) => (
                    <AminItem blog={b} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const AminItem = ({ blog }: { blog: BlogListItem }) => {
    return (
        <Row p={2} borderRadius={'6px'} justifyContent={'space-between'} border={'2px solid #1976d2'}>
            <Row gap={10}>
                <Typography fontWeight={700}>{blog.id}</Typography>
                <Typography fontWeight={700}>{blog.title}</Typography>
            </Row>
            <Typography fontWeight={700}>{blog.date}</Typography>
        </Row>
    );
};
