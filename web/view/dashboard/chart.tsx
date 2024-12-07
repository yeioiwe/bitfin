'use client';
import { useEffect } from 'react';

const TradingViewWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            new window.TradingView.widget({
                autosize: true,
                symbol: 'NASDAQ:AAPL',
                interval: 'D',
                container_id: 'tradingview-widget',
                theme: 'dark',
                style: '1',
                locale: 'ru',
            });
        };
    }, []);

    return <div id="tradingview-widget" style={{ height: '500px' }}></div>;
};

export default TradingViewWidget;
