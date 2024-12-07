import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';

export const TtraidnigHistory = () => {
    return (
        <Col gap={4}>
            <Typography fontSize={'24px'} fontWeight={700} color="#fff">
                История торговли:
            </Typography>

            <Col
                justifyContent={'flex-start'}
                minHeight={'450px'}
                gap={2}
                p={2}
                bgcolor={'#172d3e'}
                borderRadius={'16px'}
            >
                <Row justifyContent={'space-between'}>
                    <Typography>Пара</Typography>
                    <Typography>Дата</Typography>
                    <Typography>Прибыль</Typography>
                </Row>
                <Col gap={1}>
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                    <HistoryItem pair="BTC/USDT" date="22.04.2024" profit={5000} />
                </Col>
            </Col>
        </Col>
    );
};

const HistoryItem = ({ pair, date, profit }: { pair: string; date: string; profit: number }) => {
    return (
        <Row borderRadius={'10px'} p={1} bgcolor={'rgb(13, 29, 41)'} justifyContent={'space-between'}>
            <Typography>{pair}</Typography>
            <Typography>{date}</Typography>
            <Typography color="#01A781">₽ {profit}</Typography>
        </Row>
    );
};
