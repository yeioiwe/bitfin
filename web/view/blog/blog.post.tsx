'use client';
import { useBlogGetPost } from '@/shared/config/api/blog/blog';
import { Col, Row } from '@/shared/ui/boxes';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const BlogPostId = ({ id }: { id: number }) => {
    const router = useRouter();
    const { data: post } = useBlogGetPost(id);
    if (!post) return null;

    return (
        <Col mx={6} flex={1} width={'100%'} gap={1}>
            <Box display={'flex'} justifyContent={'flex-start'}>
                <Link href="/blog">
                    <Row color={'#01c095'} gap={1}>
                        <ArrowBackIcon />
                        <Typography>Назад</Typography>
                    </Row>
                </Link>
            </Box>

            <Typography fontWeight={700} fontSize={'21px'}>
                {post.title}
            </Typography>

            <Box
                maxWidth={'100%'}
                sx={{
                    img: { width: '100%' },
                    iframe: { width: '100%', minHeight: '500px' },
                    //color: 'dark.main',
                }}
            >
                <div className="ql-editor" style={{ width: '100%', boxSizing: 'border-box', padding: 0 }}>
                    <div
                        style={{ width: '100%', boxSizing: 'border-box' }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </Box>

            <Row justifyContent={'space-between'}>
                <Row gap={1}>
                    <AccessTimeFilledIcon />
                    <Typography>{post.date}</Typography>
                </Row>
                <Row gap={1}>
                    <FavoriteIcon />
                    <Typography>{post.like}</Typography>
                </Row>
            </Row>
        </Col>
    );
};
