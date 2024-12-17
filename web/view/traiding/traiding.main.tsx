'use client';
import { Row } from '@/shared/ui/boxes';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { TraidingCurrency } from './traiding.currenycy';
import TradingViewWidget from './widget';
export const TraidingMain = () => {
    const [activeCurrency, setActiveCurrency] = useState('BTC');

    useEffect(() => {
        console.log(activeCurrency);
    }, [activeCurrency]);

    return (
        <Row flex={1} px={2} alignItems={'flex-start'} gap={2}>
            <TraidingCurrency setCurrency={setActiveCurrency} />
            <Box display={'flex'} flex={1} minHeight={'900px'}>
                <TradingViewWidget symbol={activeCurrency} />
            </Box>
        </Row>
    );
};
