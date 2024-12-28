'use client';
import { useBlogEditPost, useBlogGetPost } from '@/config/api/blog/blog';
import { Col, Row } from '@/config/boxes';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
import { fileToBase64 } from '../newBlog/new.blog';
import { formats123, toolbar123 } from '../newBlog/option';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const BlogEdit = ({ id }: { id: number }) => {
    const { data: post } = useBlogGetPost(id);
    const [content, setContent] = useState('');
    const [img, setImg] = useState<any>();

    const { mutate } = useBlogEditPost();

    const { register, getValues, setValue } = useForm();

    useEffect(() => {
        if (post !== undefined) {
            setValue('title', post.title);
            setValue('shortDescription', post.shortDescription);
            setValue('date', post.like);
            setValue('like', post.like);
            setContent(post.content);
            setImg(post.avatar);
        }
    }, [post]);

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const file = acceptedFiles.at(0);

            if (file) {
                const base64 = await fileToBase64(file);
                setImg(base64);
            }
        },
        [img, setImg],
    );

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
    });

    const handleEdit = () => {
        mutate({
            data: {
                id,
                avatar: img,
                content,
                date: getValues('date'),
                like: getValues('like'),
                shortDescription: getValues('shortDescription'),
                title: getValues('title'),
            },
        });
    };
    if (post == undefined) return null;

    return (
        <form onSubmit={handleEdit}>
            <Col width={'100%'} gap={2}>
                <Typography fontWeight={700} color="white">
                    Edit blog post id: {post.id}
                </Typography>

                <Col width={'100%'}>
                    <Typography>Заголовок:</Typography>
                    <OutlinedInput {...register('title')} />
                </Col>

                <Col width={'100%'}>
                    <Typography>Краткое описание (для превью):</Typography>
                    <OutlinedInput {...register('shortDescription')} />
                </Col>

                <Box>
                    <Box p={1} bgcolor={'#232323'} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {acceptedFiles.length > 0 ? (
                            acceptedFiles.at(0)?.name
                        ) : (
                            <Typography>Картинка превью</Typography>
                        )}
                    </Box>
                </Box>

                <ReactQuill
                    formats={formats123}
                    modules={{
                        toolbar: toolbar123,
                    }}
                    theme="snow"
                    value={content}
                    onChange={setContent}
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
                    ОБНОВИТЬ
                </Button>
            </Col>
        </form>
    );
};
