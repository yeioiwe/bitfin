'use client';
import { useUserCreateUser } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const AddPage = () => {
    const router = useRouter();
    const { register, handleSubmit, getValues, formState } = useForm();

    const { mutate } = useUserCreateUser();

    const handleCreate = () => {
        mutate(
            {
                data: {
                    username: getValues('username'),
                    password: getValues('password'),
                    balance: getValues('balance'),
                },
            },
            {
                onSuccess: () => router.push('/'),
            },
        );
    };

    return (
        <Box m={6}>
            <Col p={6}>
                <Button variant="contained" onClick={() => router.push('/')}>
                    главная страница
                </Button>

                <form onSubmit={handleSubmit(handleCreate)}>
                    <Col gap={2} mt={8}>
                        <Typography>Логин:</Typography>
                        <OutlinedInput {...register('username')} />

                        <Typography>Пароль:</Typography>
                        <OutlinedInput {...register('password')} />

                        <Typography>Баланс:</Typography>
                        <OutlinedInput type="number" {...register('balance')} />

                        <Button variant="contained" type="submit">
                            создать
                        </Button>
                    </Col>
                </form>
            </Col>
        </Box>
    );
};
