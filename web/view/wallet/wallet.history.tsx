import { useUserGetHistory } from '@/shared/config/api/user/user';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const WalletHistory = () => {
    const { data, isLoading } = useUserGetHistory();

    if (!data?.items && isLoading) return null;

    return (
        <Col gap={2} borderRadius={'6px'} alignItems={'flex-start'} py={2} px={4} bgcolor={'#172d3e'}>
            <Typography fontWeight={700} color="white">
                История торговли:
            </Typography>

            <Row width={'100%'} justifyContent={'space-between'}>
                <Typography fontWeight={700} color="white">
                    Пара
                </Typography>
                <Typography fontWeight={700} color="white">
                    Дата
                </Typography>
                <Typography fontWeight={700} color="white">
                    Прибыль
                </Typography>
            </Row>

            <Col gap={1} width={'100%'}>
                {data?.items.map((h, i) => <HistoryItem {...h} key={i} />)}
            </Col>
        </Col>
    );
};

const HistoryItem = ({ pair, date, profit }: { pair: string; date: string; profit: number }) => {
    return (
        <Row justifyContent={'space-between'} bgcolor={'rgb(13, 29, 41)'} p={1} borderRadius={'5px'}>
            <Typography>{pair}</Typography>
            <Typography>{date}</Typography>
            <Typography color="rgb(1,167,129)">{profit} USDT</Typography>
        </Row>
    );
};
