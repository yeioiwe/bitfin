import BnbIcon from '@/public/bnb-icon.png';
import BtcIcon from '@/public/btc-icon.png';
import DogeIcon from '@/public/doge-icon.png';
import SolIcon from '@/public/sol-icon.png';
import UsdtIcon from '@/public/usdt-icon.png';
import XrpIcon from '@/public/xrp-icon.png';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { UserAssets } from './wallet.types';

export const WalletAssets = ({ assets }: { assets: UserAssets | undefined }) => {
    if (!assets) return null;

    return (
        <Col gap={2} borderRadius={'6px'} alignItems={'flex-start'} py={2} px={4} bgcolor={'#172d3e'}>
            <Typography fontWeight={700} color="white">
                Мои Активы:
            </Typography>
            <Col width={'100%'} gap={1}>
                <AssetsItem
                    code="USDT"
                    name="Tether"
                    icon={UsdtIcon}
                    value={assets.USDT.value}
                    usdt_value={assets.USDT.usdt_value}
                />
                <AssetsItem
                    code="BTC"
                    name="Bitcoin"
                    icon={BtcIcon}
                    value={assets.BTC.value}
                    usdt_value={assets.BTC.usdt_value}
                />
                <AssetsItem
                    code="XRP"
                    name="Ripple"
                    icon={XrpIcon}
                    value={assets.XRP.value}
                    usdt_value={assets.XRP.usdt_value}
                />
                <AssetsItem
                    code="BNB"
                    name="Binance Network"
                    icon={BnbIcon}
                    value={assets.BNB.value}
                    usdt_value={assets.BNB.usdt_value}
                />
                <AssetsItem
                    code="DOGE"
                    name="Dogecoin"
                    icon={DogeIcon}
                    value={assets.DOGE.value}
                    usdt_value={assets.DOGE.usdt_value}
                />
                <AssetsItem
                    code="SOL"
                    name="Solana"
                    icon={SolIcon}
                    value={assets.SOL.value}
                    usdt_value={assets.SOL.usdt_value}
                />
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
    value: string;
    usdt_value: string;
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
                <Typography color="white" fontWeight={700}>
                    {value}
                </Typography>
                <Typography fontSize={'12px'}>{usdt_value} USDT</Typography>
            </Col>
        </Row>
    );
};
