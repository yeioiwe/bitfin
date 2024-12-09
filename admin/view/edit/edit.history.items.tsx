import { useUserHistoryList } from '@/config/api/user/user';
import { Col, Row } from '@/config/boxes';
import { Typography } from '@mui/material';

export const HistoryItems = ({ userId }: { userId: number }) => {
    const { data: history } = useUserHistoryList(userId);
    if (!history) return null;

    return (
        <Col gap={2} mt={4}>
            <Typography>История торговли:</Typography>

            <Row justifyContent={'space-between'}>
                <Typography>Пара:</Typography>
                <Typography>Дата:</Typography>
                <Typography>Профит:</Typography>
            </Row>

            <Col gap={1}>
                {history.items.map((h, i) => (
                    <HistoryItem key={i} {...h} />
                ))}
            </Col>
        </Col>
    );
};

const HistoryItem = ({
    pair,
    date,
    profit,
}: {
    id: number;
    userId: number;
    pair: string;
    date: string;
    profit: number;
}) => {
    return (
        <Row p={2} bgcolor={'#172d3e'} justifyContent={'space-between'}>
            <Typography>{pair}</Typography>
            <Typography>{date}</Typography>
            <Typography>{profit} RUB</Typography>
        </Row>
    );
};
