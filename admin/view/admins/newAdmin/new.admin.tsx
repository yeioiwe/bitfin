'use client';
import { NewAdminDto } from '@/config/api/api.schemas';
import { NewAdminDto as NewAdminDtoZod } from '@/config/api/api.zod';
import { useAuthNewAdmin } from '@/config/api/auth/auth';
import { Col } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

export const NewAdmin = () => {
    const router = useRouter();
    const { register, getValues, handleSubmit } = useForm<NewAdminDto>({ resolver: zodResolver(NewAdminDtoZod) });
    const { mutate } = useAuthNewAdmin();

    const handleCreate = () => {
        const form = getValues();
        mutate(
            {
                data: {
                    ...form,
                },
            },
            {
                onSuccess: () => {
                    router.push('/admins');
                },
            },
        );
    };

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <form onSubmit={handleSubmit(handleCreate)}>
                <Col minWidth={'400px'} gap={3}>
                    <Col>
                        <Typography fontWeight={700}>Логин:</Typography>
                        <OutlinedInput {...register('login')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>Пароль:</Typography>
                        <OutlinedInput {...register('password')} />
                    </Col>

                    <Button type="submit" variant="contained">
                        Создать админа
                    </Button>
                </Col>
            </form>
        </Box>
    );
};
