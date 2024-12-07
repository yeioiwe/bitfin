'use client';
import { Col } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import { Box, OutlinedInput, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
    const router = useRouter();

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const check = () => {
        console.log(getValues('login'));
        console.log(getValues('password'));
    };

    const handleLogin = async () => {
        try {
            //TODO url .env
            const response = await axios.post('http://109.120.139.129:8080/auth/login', {
                username: getValues('login'),
                password: getValues('password'),
            });

            const token = response.data.access_token;

            localStorage.setItem('token', token);

            router.push('/dashboard');
        } catch (err) {
            console.log({ err });
        }
    };

    return (
        <Box width={'100%'} mt={20} mb={30}>
            <form onSubmit={handleSubmit(handleLogin)}>
                <Col alignItems={'center'} gap={4}>
                    <Typography fontWeight={700} fontSize={'27px'} color="#fff">
                        Вход в кошелек
                    </Typography>
                    <OutlinedInput placeholder="Логин" {...register('login')} />

                    <OutlinedInput type="password" placeholder="Пароль" {...register('password')} />

                    <StyledButton type="submit">Вход</StyledButton>
                </Col>
            </form>
        </Box>
    );
}
