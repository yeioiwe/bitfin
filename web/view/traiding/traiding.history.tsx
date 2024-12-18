import { TraidingCurrency as TraidingCurrencyType } from '@/shared/config/traiding.currency';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

export const TraidingHistory = ({ activeCurrency }: { activeCurrency: TraidingCurrencyType }) => {
    return (
        <Col gap={2}>
            <Typography color="white" fontWeight={700} fontSize={'21px'}>
                История сделок {activeCurrency.name}:
            </Typography>

            <Col gap={1}>
                <HistoryItem type="BUY" {...activeCurrency} />
                <HistoryItem type="BUY" {...activeCurrency} />
                <HistoryItem type="BUY" {...activeCurrency} />
                <HistoryItem type="SELL" {...activeCurrency} />
                <HistoryItem type="BUY" {...activeCurrency} />
                <HistoryItem type="SELL" {...activeCurrency} />
            </Col>
        </Col>
    );
};

const HistoryItem = ({ icon, name, type }: { name: string; icon: StaticImageData; type: 'SELL' | 'BUY' }) => {
    return (
        <Row width={'100%'} justifyContent={'space-between'} bgcolor={'#172d3e'} borderRadius={'5px'} py={1} px={2}>
            <Row gap={2}>
                <Image width={30} height={30} alt="" src={icon} />
                <Typography fontWeight={700}>{name}</Typography>
            </Row>

            <Typography>22.04.2024 18:34</Typography>

            {type === 'BUY' ? (
                <Typography fontWeight={700} color="#67a36a">
                    Покупка
                </Typography>
            ) : (
                <Typography fontWeight={700} color="#b75959">
                    Продажа
                </Typography>
            )}

            <Typography>200 USDT</Typography>
        </Row>
    );
};
