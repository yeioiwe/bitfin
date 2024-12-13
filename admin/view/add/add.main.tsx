'use client';
import { queryClient } from '@/config/api/api.axios';
import { UserCreateDto } from '@/config/api/api.schemas';
import { UserCreateDto as UserCreateDtoZod } from '@/config/api/api.zod';
import { getUserGetUsersQueryKey, useUserCreateUser } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const AddUserMain = () => {
    const router = useRouter();
    const { register, getValues, handleSubmit } = useForm<UserCreateDto>({ resolver: zodResolver(UserCreateDtoZod) });
    const { mutate } = useUserCreateUser();

    const handleCreate = () => {
        const form = getValues();
        console.log({ form });
        mutate(
            {
                data: {
                    ...form,
                },
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: getUserGetUsersQueryKey() });
                    router.push('/dashboard');
                },
            },
        );
    };

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <form onSubmit={handleSubmit(handleCreate)}>
                <Col minWidth={'400px'} gap={3}>
                    <Col>
                        <Typography fontWeight={700}>ФИО пользователя:</Typography>
                        <OutlinedInput {...register('name')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>Логин:</Typography>
                        <OutlinedInput {...register('username')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>Пароль:</Typography>
                        <OutlinedInput {...register('password')} />
                    </Col>

                    <Button type="submit" variant="contained">
                        Создать пользователя
                    </Button>
                </Col>
            </form>
        </Box>
    );
};
