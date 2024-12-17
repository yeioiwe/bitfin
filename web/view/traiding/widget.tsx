import React, { useEffect } from 'react';

interface TradingViewWidgetProps {
    symbol: string; // Символ криптовалюты, например 'BINANCE:BTCUSDT'
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
    // Функция инициализации TradingView
    function initTradingView() {
        // Проверка на наличие TradingView
        if (!window.TradingView) {
            console.error('TradingView is not available');
            return;
        }

        new window.TradingView.widget({
            autosize: true,
            symbol: `BINANCE:${symbol}USDT`, // передаем символ для графика
            interval: '1', // интервал (D - дневной график)
            container_id: 'tradingview_widget', // ID контейнера для виджета
            library_path: 'https://s3.tradingview.com/', // путь к библиотеке TradingView
            backgroundColor: 'rgb(23, 45, 62)',
            locale: 'ru',
            save_image: false,
            theme: 'Dark', // Темная тема, как на Bitfinex
        });
    }

    useEffect(() => {
        // Динамическая загрузка скрипта TradingView
        if (!window.TradingView) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // Инициализация виджета после загрузки скрипта
                if (window.TradingView) {
                    initTradingView();
                } else {
                    console.error('TradingView script failed to load');
                }
            };
        } else {
            // Инициализация виджета сразу, если скрипт уже загружен
            initTradingView();
        }

        return () => {
            // Очистить виджет, если компонент удаляется
            const element = document.getElementById('tradingview_widget');
            if (element) {
                element.innerHTML = ''; // Очистить элемент, чтобы избежать дублирования виджетов
            }
        };
    }, [symbol]); // Перезапускать виджет при изменении символа

    return <div id="tradingview_widget" style={{ height: '500px', width: '100%' }}></div>;
};

export default TradingViewWidget;
