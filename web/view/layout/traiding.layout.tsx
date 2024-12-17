import BtcIcon from '@/public/btc-icon.png';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image from 'next/image';

export const TraidingLayout = () => {
    return (
        <Col gap={1}>
            <Typography color="white" fontWeight={700}>
                История сделок:
            </Typography>

            <TraidingItem />
            <TraidingItem />
            <TraidingItem />
            <TraidingItem2 />
            <TraidingItem />
            <TraidingItem />
            <TraidingItem />
            <TraidingItem2 />
            <TraidingItem2 />
            <TraidingItem />
            <TraidingItem2 />
            <TraidingItem />
            <TraidingItem />
        </Col>
    );
};

const TraidingItem = () => {
    return (
        <Row width={'350px'} justifyContent={'space-between'} bgcolor={'#172d3e'} borderRadius={'5px'} py={1} px={2}>
            <Image width={30} height={30} alt="" src={BtcIcon} />
            <Typography fontWeight={700}>BTC</Typography>
            <Typography fontWeight={700} color="#4ea351">
                Покупка
            </Typography>
            <Typography>$200</Typography>
        </Row>
    );
};

const TraidingItem2 = () => {
    return (
        <Row width={'350px'} justifyContent={'space-between'} bgcolor={'#172d3e'} borderRadius={'5px'} py={1} px={2}>
            <Image width={30} height={30} alt="" src={BtcIcon} />
            <Typography fontWeight={700}>BTC</Typography>
            <Typography fontWeight={700} color="#bf3939">
                Продажа
            </Typography>
            <Typography>$200</Typography>
        </Row>
    );
};
// #4ea351 pok // #bf3939 prod
