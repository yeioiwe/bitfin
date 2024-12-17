'use client';
import BtcIcon from '@/public/btc-icon.png';
import { Col, Row } from '@/shared/ui/boxes';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

const currency = [
    { name: 'Bitcoin', code: 'BTC', icon: BtcIcon },
    { name: 'Etherium', code: 'ETH', icon: BtcIcon },
    { name: 'Ripple', code: 'XRP', icon: BtcIcon },
];

export const TraidingCurrency = ({ setCurrency }: { setCurrency: Dispatch<SetStateAction<string>> }) => {
    return (
        <Col gap={1}>
            {currency.map((c, i) => (
                <CurrencyItem setCurrency={setCurrency} icon={c.icon} name={c.name} code={c.code} key={i} />
            ))}
        </Col>
    );
};

const CurrencyItem = ({
    name,
    code,
    icon,
    setCurrency,
}: {
    name: string;
    code: string;
    icon: StaticImageData;
    setCurrency: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <Row
            justifyContent={'flex-start'}
            sx={{ cursor: 'pointer' }}
            onClick={() => setCurrency(code)}
            borderRadius={'5px'}
            bgcolor={'#172d3e'}
            px={2}
            py={1}
            gap={1}
        >
            <Image width={20} height={20} alt="" src={icon} />
            {name}
        </Row>
    );
};
