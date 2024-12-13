'use client';
import { AuthDto } from '@/config/api/api.schemas';
import { AuthDto as AuthDtoZod } from '@/config/api/api.zod';
import { useAuthLogin } from '@/config/api/auth/auth';
import { Col } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
    const router = useRouter();
    const { mutate } = useAuthLogin();

    const { register, handleSubmit, getValues } = useForm<AuthDto>({ resolver: zodResolver(AuthDtoZod) });

    const handleLogin = () => {
        const form = getValues();
        mutate(
            {
                data: {
                    ...form,
                },
            },
            {
                onSuccess: data => {
                    localStorage.setItem('authToken', data.authToken);
                    router.push('/');
                },
            },
        );
    };

    return (
        <Box mt={20} display={'flex'} justifyContent={'center'}>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Col gap={1}>
                    <Typography>Login</Typography>
                    <OutlinedInput {...register('login')} />

                    <Typography>Password</Typography>
                    <OutlinedInput type="password" {...register('password')} />

                    <Button type="submit" variant="contained">
                        LOGIN
                    </Button>
                </Col>
            </form>
        </Box>
    );
};
