'use client';

import { queryClient } from '@/config/api/api.axios';
import { getUserGetUserByIdQueryKey, useUserEditUser, useUserGetUserById } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const EditPage = ({ userId }: { userId: number }) => {
    const router = useRouter();

    const { register, setValue, getValues, handleSubmit } = useForm();
    const { data: user, isLoading } = useUserGetUserById(userId);
    const { mutate } = useUserEditUser();

    useEffect(() => {
        if (user) {
            setValue('username', user.username);
            setValue('password', user.password);
            setValue('balance', user.balance);
            setValue('profit_1', user.profit_1);
            setValue('profit_7', user.profit_7);
            setValue('profit_24', user.profit_24);
        }
    });

    if (!user || isLoading) return null;

    const handleEdit = () => {
        mutate(
            {
                data: {
                    id: user?.id,
                    username: getValues('username'),
                    password: getValues('password'),
                    balance: getValues('balance'),
                    profit_1: getValues('profit_1'),
                    profit_7: getValues('profit_7'),
                    profit_24: getValues('profit_24'),
                },
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: getUserGetUserByIdQueryKey(user.id) });
                },
            },
        );
    };

    return (
        <Col>
            <Button variant="contained" onClick={() => router.push('/')}>
                главная страница
            </Button>

            <form onSubmit={handleSubmit(handleEdit)}>
                <Col gap={1} mt={8}>
                    <Typography>Логин:</Typography>
                    <OutlinedInput {...register('username')} />

                    <Typography>Пароль:</Typography>
                    <OutlinedInput {...register('password')} />

                    <Typography>Баланс:</Typography>
                    <OutlinedInput type="number" {...register('balance')} />

                    <Typography>Прибыль (24 часов):</Typography>
                    <OutlinedInput type="number" {...register('profit_24')} />

                    <Typography>Прибыль (7 дней):</Typography>
                    <OutlinedInput type="number" {...register('profit_7')} />

                    <Typography>Прибыль (1 месяц):</Typography>
                    <OutlinedInput type="number" {...register('profit_1')} />

                    <Button type="submit" variant="contained">
                        редактироовать
                    </Button>
                </Col>
            </form>
        </Col>
    );
};
