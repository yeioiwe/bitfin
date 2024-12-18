'use client';
import BtcIcon from '@/public/traiding/btc-icon.png';
import { TraidingCurrency as TraidingCurrencyType } from '@/shared/config/traiding.currency';
import { Col, Row } from '@/shared/ui/boxes';
import { useEffect, useState } from 'react';
import { TraidingCurrency } from './traiding.currenycy';
import { TraidingHistory } from './traiding.history';
import TradingViewWidget from './widget';
export const TraidingMain = () => {
    const [activeCurrency, setActiveCurrency] = useState<TraidingCurrencyType>({
        name: 'Bitcoin',
        code: 'BTC',
        icon: BtcIcon,
    });

    useEffect(() => {
        console.log(activeCurrency);
    }, [activeCurrency]);

    return (
        <Row flex={1} px={2} alignItems={'flex-start'} gap={2}>
            <TraidingCurrency activeCurrency={activeCurrency} setCurrency={setActiveCurrency} />
            <Col gap={2} justifyContent={'flex-start'} display={'flex'} flex={1} minHeight={'900px'}>
                <TradingViewWidget symbol={activeCurrency.code} />
                <TraidingHistory activeCurrency={activeCurrency} />
            </Col>
        </Row>
    );
};
