'use client';
import { BlogListItem } from '@/shared/config/api/api.schemas';
import { useBlogGetList } from '@/shared/config/api/blog/blog';
import { Col, Row } from '@/shared/ui/boxes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Link, Typography } from '@mui/material';

export const BlogMain = () => {
    const { data: blogList } = useBlogGetList();

    return (
        <Col flex={1} mx={4} width={'100%'} justifyContent={'flex-start'} gap={4}>
            <Typography fontSize={'21px'} color="white" fontWeight={700}>
                Блог и новости Bitfinex
            </Typography>

            <Col gap={2}>
                {blogList?.items.map((p, i) => {
                    return (
                        <Link href={`blog/${p.id}`} key={i}>
                            <BlogItemCard post={p} />
                        </Link>
                    );
                })}
            </Col>
        </Col>
    );
};

const BlogItemCard = ({ post }: { post: BlogListItem }) => {
    return (
        <Row
            width={'100%'}
            gap={2}
            p={2}
            bgcolor={'#172d3e'}
            borderRadius={'4px'}
            sx={{ cursor: 'pointer' }}
            justifyContent={'flex-start'}
        >
            <Box
                height={120}
                width={170}
                sx={{
                    backgroundImage: `url(${post.avatar})`,
                    backgroundSize: 'cover',
                    borderRadius: '4px',
                }}
            />

            <Col gap={2} flex={1}>
                <Typography color="white" fontWeight={700} fontSize={'18px'}>
                    {post.title}
                </Typography>

                <Typography>{post.shortDescription}</Typography>

                <Row justifyContent={'space-between'}>
                    <Typography fontSize={'14px'}>{post.date}</Typography>

                    <Row gap={1}>
                        <FavoriteIcon sx={{ width: '16px', height: '16px', color: '#01c095' }} />
                        <Typography color="#01c095" fontSize={'14px'}>
                            {post.like}
                        </Typography>
                    </Row>
                </Row>
            </Col>
        </Row>
    );
};
