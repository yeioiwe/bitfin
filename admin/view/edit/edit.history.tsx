import { HistoryDto, HistoryItem } from '@/config/api/api.schemas';
import { HistoryDto as HistoryDtoZod } from '@/config/api/api.zod';
import { useUserAddHistory, useUserHistoryList } from '@/config/api/user/user';
import { Col, Row } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export const EditHistory = ({ id }: { id: number }) => {
    const { mutate } = useUserAddHistory();

    const { register, getValues } = useForm<HistoryDto>({ resolver: zodResolver(HistoryDtoZod) });

    const handleCreate = () => {
        const form = getValues();

        mutate({
            data: { ...form, userId: id.toString() },
        });
    };

    const { data: history } = useUserHistoryList(id);

    return (
        <Col gap={2}>
            <Typography fontWeight={700}>Добавить сделку</Typography>

            <form onSubmit={handleCreate}>
                <Col gap={4}>
                    <Row gap={4}>
                        <Col>
                            <Typography fontWeight={700}>Пара: BTC/USDT</Typography>
                            <OutlinedInput {...register('pair')} />
                        </Col>

                        <Col>
                            <Typography fontWeight={700}>Дата: 22.04.2024</Typography>
                            <OutlinedInput {...register('date')} />
                        </Col>

                        <Col>
                            <Typography fontWeight={700}>Профит</Typography>
                            <OutlinedInput type="number" {...register('profit')} />
                        </Col>
                    </Row>

                    <Button type="submit" variant="contained">
                        Сохранить
                    </Button>
                </Col>
            </form>

            <Typography fontWeight={700}>История сделок</Typography>

            {history?.items ? (
                <Col gap={2}>
                    {history?.items.map((h, i) => (
                        <HistoryItems {...h} key={i} />
                    ))}
                </Col>
            ) : null}
        </Col>
    );
};

const HistoryItems = (history: HistoryItem) => {
    return (
        <Row p={2} bgcolor={'#2d2d2d'} justifyContent={'space-between'}>
            <Typography>{history.id}</Typography>
            <Typography>{history.pair}</Typography>
            <Typography>{history.date}</Typography>
            <Typography>{history.profit}</Typography>
        </Row>
    );
};
