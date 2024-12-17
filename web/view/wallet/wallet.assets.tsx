import BnbIcon from '@/public/bnb-icon.png';
import BtcIcon from '@/public/btc-icon.png';
import DogeIcon from '@/public/doge-icon.png';
import SolIcon from '@/public/sol-icon.png';
import UsdtIcon from '@/public/usdt-icon.png';
import XrpIcon from '@/public/xrp-icon.png';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

export const WalletAssets = () => {
    return (
        <Col gap={2} borderRadius={'6px'} alignItems={'flex-start'} py={2} px={4} bgcolor={'#172d3e'}>
            <Typography fontWeight={700} color="white">
                Мои Активы:
            </Typography>
            <Col width={'100%'} gap={1}>
                <AssetsItem code="USDT" name="Tether" icon={UsdtIcon} value={2000} usdt_value={2000} />
                <AssetsItem code="BTC" name="Bitcoin" icon={BtcIcon} value={0.00001} usdt_value={250} />
                <AssetsItem code="XRP" name="Ripple" icon={XrpIcon} value={0.00001} usdt_value={250} />
                <AssetsItem code="BNB" name="Binance Network" icon={BnbIcon} value={0.01} usdt_value={450} />
                <AssetsItem code="DOGE" name="Dogecoin" icon={DogeIcon} value={0.01} usdt_value={450} />
                <AssetsItem code="SOL" name="Solana" icon={SolIcon} value={0.01} usdt_value={450} />
            </Col>
        </Col>
    );
};

const AssetsItem = ({
    code,
    name,
    icon,
    value,
    usdt_value,
}: {
    code: string;
    name: string;
    icon: StaticImageData;
    value: number;
    usdt_value: number;
}) => {
    return (
        <Row justifyContent={'space-between'}>
            <Row gap={2}>
                <Image width={35} height={35} alt="" src={icon} />
                <Col>
                    <Typography fontWeight={700}>{code}</Typography>
                    <Typography fontSize={'12px'}>{name}</Typography>
                </Col>
            </Row>
            <Col alignItems={'flex-end'}>
                <Typography fontWeight={700}>{value}</Typography>
                <Typography fontSize={'12px'}>{usdt_value} USDT</Typography>
            </Col>
        </Row>
    );
};
