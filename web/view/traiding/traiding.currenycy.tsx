'use client';
import { traidingCurrency, TraidingCurrency as TraidingCurrencyType } from '@/shared/config/traiding.currency';
import { Col, Row } from '@/shared/ui/boxes';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export const TraidingCurrency = ({
    setCurrency,
    activeCurrency,
}: {
    setCurrency: Dispatch<SetStateAction<TraidingCurrencyType>>;
    activeCurrency: TraidingCurrencyType;
}) => {
    const currency = traidingCurrency;

    return (
        <Col gap={1}>
            {currency.map((c, i) => (
                <CurrencyItem active={activeCurrency.code === c.code} setCurrency={setCurrency} currency={c} key={i} />
            ))}
        </Col>
    );
};

const CurrencyItem = ({
    currency,
    active,
    setCurrency,
}: {
    currency: TraidingCurrencyType;
    active: boolean;
    setCurrency: Dispatch<SetStateAction<TraidingCurrencyType>>;
}) => {
    return (
        <Row
            justifyContent={'flex-start'}
            sx={{ cursor: 'pointer' }}
            onClick={() => setCurrency(currency)}
            borderRadius={'5px'}
            bgcolor={'#172d3e'}
            px={2}
            py={1}
            gap={1}
        >
            <Image style={{ borderRadius: '50px' }} width={25} height={25} alt="" src={currency.icon} />
            <Typography fontWeight={active ? 700 : 0} color={active ? '#01c095' : 'white'}>
                {currency.name}
            </Typography>
        </Row>
    );
};
