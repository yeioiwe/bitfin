import { User } from '@/config/api/api.schemas';
import { User as UserZod } from '@/config/api/api.zod';
import { useUserEdit, useUserGetUserById } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const EditUser = ({ id }: { id: number }) => {
    const { data: user } = useUserGetUserById(id);
    const { getValues, register, reset, handleSubmit } = useForm<User>({
        resolver: zodResolver(UserZod),
    });

    useEffect(() => {
        if (user) reset({ ...user });
    }, [user]);

    const { mutate } = useUserEdit();

    const handleEdit = () => {
        mutate({ data: getValues() });
    };

    return (
        <Col gap={2}>
            <Typography fontWeight={700}>Пользователь id #{id}</Typography>
            <form onSubmit={handleSubmit(handleEdit)}>
                <Col gap={2}>
                    <Col>
                        <Typography fontWeight={700}>ФИО</Typography>
                        <OutlinedInput {...register('name')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>Логин</Typography>
                        <OutlinedInput {...register('username')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>Пароль</Typography>
                        <OutlinedInput {...register('password')} />
                    </Col>

                    <Button type="submit" variant="contained">
                        Редактировать
                    </Button>

                    <Button color="error" variant="contained">
                        Удалить
                    </Button>
                </Col>
            </form>
        </Col>
    );
};
