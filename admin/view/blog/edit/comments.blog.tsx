import { queryClient } from '@/config/api/api.axios';
import { CommentItem as CommentItemType, CreateCommentDto } from '@/config/api/api.schemas';
import {
    getBlogGetCommentQueryKey,
    useBlogCreateComment,
    useBlogDeleteComment,
    useBlogGetComment,
} from '@/config/api/blog/blog';
import { Col, Row } from '@/config/boxes';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, IconButton, OutlinedInput, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export const PostComments = ({ id }: { id: number }) => {
    const { data: postList } = useBlogGetComment(id);
    const { mutate } = useBlogCreateComment();
    const { register, getValues } = useForm();

    const handleCreateComment = () => {
        const form = getValues();
        mutate(
            { data: { postId: id, ...form } as CreateCommentDto },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: getBlogGetCommentQueryKey(id) });
                },
            },
        );
    };

    if (postList === undefined) return null;

    return (
        <Col width={'100%'} gap={2}>
            <Typography fontSize={'21px'} fontWeight={700}>
                Добавить комментарий:
            </Typography>

            <form onSubmit={handleCreateComment}>
                <Col gap={4}>
                    <Row gap={4} justifyContent={'flex-start'}>
                        <Col>
                            <Typography>Фамилия Имя:</Typography>
                            <OutlinedInput {...register('name')} />
                        </Col>

                        <Col>
                            <Typography>Дата:</Typography>
                            <OutlinedInput {...register('date')} />
                        </Col>

                        <Col>
                            <Typography>Лайки:</Typography>
                            <OutlinedInput {...register('like')} />
                        </Col>
                    </Row>

                    <Col>
                        <Typography>Текст комментария:</Typography>
                        <OutlinedInput {...register('comment')} />
                    </Col>

                    <Button variant="contained" type="submit">
                        Добавить комментарий
                    </Button>
                </Col>
            </form>

            <Typography fontSize={'21px'} fontWeight={700}>
                Список комментариев:
            </Typography>

            <Col gap={2}>
                {postList.items.map((c, i) => (
                    <CommentItem comment={c} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const CommentItem = ({ comment }: { comment: CommentItemType }) => {
    const { mutate } = useBlogDeleteComment();

    const handleDelete = () => {
        mutate(
            { id: comment.id },
            {
                onSuccess: () => queryClient.invalidateQueries({ queryKey: getBlogGetCommentQueryKey(comment.postId) }),
            },
        );
    };

    return (
        <Col p={2} borderRadius={'4px'} bgcolor={'#232323'}>
            <Row justifyContent={'space-between'}>
                <Typography>{comment.name}</Typography>
                <Typography>{comment.date}</Typography>
                <IconButton onClick={() => handleDelete()} sx={{ color: 'red' }}>
                    <HighlightOffIcon />
                </IconButton>
            </Row>
            <Typography>{comment.comment}</Typography>
        </Col>
    );
};
