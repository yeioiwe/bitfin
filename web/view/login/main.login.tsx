import { useAuthLogin } from '@/shared/config/api/auth/auth';
import { Col } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { Box, OutlinedInput, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const LoginMain = () => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>();

    const { register, getValues, handleSubmit } = useForm();

    const { mutate, isError } = useAuthLogin();

    const handleLogin = () => {
        mutate(
            {
                data: {
                    username: getValues('username'),
                    password: getValues('password'),
                },
            },
            {
                onSuccess: data => {
                    localStorage.setItem('authToken', data.access_token);
                    router.push('/wallet');
                },
                onError(error) {
                    {
                        if (error.code === 'ERR_BAD_REQUEST') setError('Неверный логин или пароль');
                    }
                },
            },
        );
    };

    return (
        <Box width={'100%'} mt={20} mb={30}>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Col alignItems={'center'} gap={4}>
                    <Typography fontWeight={700} fontSize={'27px'} color="#fff">
                        Вход в кошелек
                    </Typography>
                    <OutlinedInput placeholder="Логин" {...register('username')} />

                    <OutlinedInput type="password" placeholder="Пароль" {...register('password')} />

                    <StyledButton type="submit">Вход</StyledButton>

                    {isError ? <Typography color="#d54646">{error}</Typography> : null}
                </Col>
            </form>
        </Box>
    );
};
