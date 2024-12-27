'use client';
import { useBlogCreatePost } from '@/config/api/blog/blog';
import { Col, Row } from '@/config/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const NewBlogMain = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const { register, getValues } = useForm();

    const { mutate } = useBlogCreatePost();

    const createPost = () => {
        mutate(
            {
                data: {
                    content: value,
                    date: getValues('date'),
                    like: getValues('like'),
                    title: getValues('title'),
                    shortDescription: getValues('shortDescription'),
                },
            },
            {
                onSuccess: () => router.push('/dashboard'),
            },
        );
    };

    return (
        <form onSubmit={createPost}>
            <Col width={'100%'} gap={2}>
                <Typography fontWeight={700} color="white">
                    Create new blog post:
                </Typography>

                <Col width={'100%'}>
                    <Typography>Заголовок:</Typography>
                    <OutlinedInput {...register('title')} />
                </Col>

                <Col width={'100%'}>
                    <Typography>Краткое описание (для превью):</Typography>
                    <OutlinedInput {...register('shortDescription')} />
                </Col>

                <ReactQuill
                    formats={formats123}
                    modules={{
                        toolbar: toolbar123,
                    }}
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />

                <Row gap={4} width={'100%'} justifyContent={'flex-start'}>
                    <Col>
                        <Typography>Дата (04.12.2024):</Typography>
                        <OutlinedInput {...register('date')} />
                    </Col>

                    <Col>
                        <Typography>К-во лайков:</Typography>
                        <OutlinedInput {...register('like')} />
                    </Col>
                </Row>

                <Button type="submit" variant="contained">
                    СОХРАНИТЬ
                </Button>
            </Col>
        </form>
    );
};
