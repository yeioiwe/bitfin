'use client';
import { useBlogCreatePost } from '@/config/api/blog/blog';
import { Col, Row } from '@/config/boxes';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
import { formats123, toolbar123 } from './option';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export const NewBlogMain = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const [img, setImg] = useState<any>();
    const { register, getValues } = useForm();

    const { mutate } = useBlogCreatePost();

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

    const createPost = () => {
        mutate(
            {
                data: {
                    avatar: img,
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

    const check = () => {
        console.log(img);
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

                <Button onClick={() => check()}>Check</Button>
            </Col>
        </form>
    );
};

export async function fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = event => {
            resolve(event.target?.result);
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}
