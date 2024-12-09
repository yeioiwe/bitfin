import { queryClient } from '@/config/api/api.axios';
import { getUserHistoryListQueryKey, useUserAddHistory } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export const EditHistory = ({ userId }: { userId: number }) => {
    const { register, getValues, handleSubmit, reset } = useForm();
    const { mutate } = useUserAddHistory();

    const handleCreate = () => {
        mutate(
            {
                data: {
                    userId: userId,
                    date: getValues('date'),
                    pair: getValues('pair'),
                    profit: getValues('profit'),
                },
            },
            {
                onSuccess: () => {
                    reset();
                    queryClient.invalidateQueries({ queryKey: getUserHistoryListQueryKey(userId) });
                },
            },
        );
    };

    return (
        <Col gap={4} mt={6}>
            <Typography>Добавить историю сделки:</Typography>

            <form onSubmit={handleSubmit(handleCreate)}>
                <Col gap={1}>
                    <Typography>Торговая пара, строкой. (Пример BTC/USDT):</Typography>
                    <OutlinedInput {...register('pair')} />

                    <Typography>Дата, строкой. (Пример 22.04.2024):</Typography>
                    <OutlinedInput {...register('date')} />

                    <Typography>Профит, число:</Typography>
                    <OutlinedInput type="number" {...register('profit')} />

                    <Button type="submit" variant="contained">
                        добавить
                    </Button>
                </Col>
            </form>
        </Col>
    );
};
