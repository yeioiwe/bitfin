import { useUserGetHistory } from '@/shared/config/api/user/user';
import { Col, Row } from '@/shared/ui/boxes';
import { Box, Typography } from '@mui/material';

export const TtraidnigHistory = () => {
    const { data: history } = useUserGetHistory();

    return (
        <Col gap={4}>
            <Typography fontSize={'24px'} fontWeight={700} color="#fff">
                История торговли:
            </Typography>

            <Col
                justifyContent={'flex-start'}
                minHeight={'300px'}
                gap={2}
                p={2}
                bgcolor={'#172d3e'}
                borderRadius={'16px'}
            >
                <Row justifyContent={'space-between'} px={4}>
                    <Typography>Пара</Typography>
                    <Typography>Дата</Typography>
                    <Typography>Прибыль</Typography>
                </Row>

                {history?.items.length === 0 ? (
                    <ClearHistory />
                ) : (
                    <Col gap={1}>{history?.items.map((h, i) => <HistoryItem key={i} {...h} />)}</Col>
                )}
            </Col>
        </Col>
    );
};

const HistoryItem = ({ pair, date, profit }: { pair: string; date: string; profit: number }) => {
    return (
        <Row borderRadius={'10px'} px={3} py={1} bgcolor={'rgb(13, 29, 41)'} justifyContent={'space-between'}>
            <Typography fontWeight={700}>{pair}</Typography>
            <Typography>{date}</Typography>
            <Typography fontWeight={700} color="#01A781">
                ₽ {profit}
            </Typography>
        </Row>
    );
};

const ClearHistory = () => {
    return (
        <Box mt={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography>История сделок пуста.</Typography>
        </Box>
    );
};
