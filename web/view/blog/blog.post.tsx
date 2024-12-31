'use client';
import { CommentItem } from '@/shared/config/api/api.schemas';
import { useBlogGetComment, useBlogGetPost } from '@/shared/config/api/blog/blog';
import { Col, Row } from '@/shared/ui/boxes';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Link, Typography } from '@mui/material';

export const BlogPostId = ({ id }: { id: number }) => {
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
                <Row gap={1} color={'#01c095'}>
                    <FavoriteIcon />
                    <Typography>{post.like}</Typography>
                </Row>
            </Row>

            <CommentsList id={id} />
        </Col>
    );
};

const CommentsList = ({ id }: { id: number }) => {
    const { data: postList } = useBlogGetComment(id);

    if (postList === undefined) return null;
    return (
        <Col mt={4}>
            <Typography fontWeight={700} fontSize={'21px'}>
                Комментарии:
            </Typography>

            <Col gap={2} mt={2}>
                {postList.items.map((c, i) => (
                    <CommentsItem comment={c} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const CommentsItem = ({ comment }: { comment: CommentItem }) => {
    return (
        <Col gap={2} bgcolor={'#172d3e'} borderRadius={'6px'} padding={'20px'}>
            <Row gap={1} justifyContent={'flex-start'}>
                <AccountCircleIcon />

                <Typography color="#fff" fontWeight={700}>
                    {comment.name}
                </Typography>
            </Row>

            <Typography>{comment.comment}</Typography>

            <Row justifyContent={'space-between'}>
                <Row gap={1}>
                    <AccessTimeFilledIcon sx={{ width: '18px', height: '18px' }} />
                    <Typography>{comment.date}</Typography>
                </Row>

                <Row gap={1} color={'#01c095'}>
                    <FavoriteIcon sx={{ width: '18px', height: '18px' }} />
                    <Typography>{comment.like}</Typography>
                </Row>
            </Row>
        </Col>
    );
};
