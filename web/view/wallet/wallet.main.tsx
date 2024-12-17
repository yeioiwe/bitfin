'use client';
import { useMarketGetMarkets } from '@/shared/config/api/market/market';
import { useUserGetOne, useUserGetWallet } from '@/shared/config/api/user/user';
import { Col } from '@/shared/ui/boxes';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { WalletAssets } from './wallet.assets';
import { WalletHistory } from './wallet.history';
import { UserAssets, UserT } from './wallet.types';
import { WalletUserCard } from './wallet.usercard';

export const WalletMain = () => {
    const { data: user, isLoading: isUserLoading } = useUserGetOne();
    const { data: wallet, isLoading: isWalletLoading } = useUserGetWallet();
    const { data: markets, isLoading: isMarketLoading } = useMarketGetMarkets();

    const [userState, setUserState] = useState<UserT>();
    const [assets, setAssets] = useState<UserAssets>();

    const getPrice = (currencyCode: string): number => {
        if (markets) {
            const price = markets.items.find(item => item.currency === currencyCode)?.price || 0;
            return +price;
        }
        return 0;
    };

    useEffect(() => {
        if (wallet && markets?.items) {
            const userAssets: UserAssets = {
                USDT: {
                    value: wallet.USDT,
                    usdt_value: (+wallet.USDT * getPrice('USDT')).toFixed(2),
                },
                BTC: {
                    value: wallet.BTC,
                    usdt_value: (+wallet.BTC * getPrice('BTC')).toFixed(2),
                },
                XRP: {
                    value: wallet.XRP,
                    usdt_value: (+wallet.XRP * getPrice('XRP')).toFixed(2),
                },
                BNB: {
                    value: wallet.BNB,
                    usdt_value: (+wallet.BNB * getPrice('BNB')).toFixed(2),
                },
                DOGE: {
                    value: wallet.DOGE,
                    usdt_value: (+wallet.DOGE * getPrice('DOGE')).toFixed(2),
                },
                SOL: {
                    value: wallet.SOL,
                    usdt_value: (+wallet.SOL * getPrice('SOL')).toFixed(2),
                },
            };
            setAssets(userAssets);
        }
    }, [wallet, markets]);

    useEffect(() => {
        if (assets) {
            const totalUsdtValue = Object.values(assets).reduce((sum, item) => sum + +item.usdt_value, 0);

            const userMe: UserT = {
                name: user?.name || '',
                usdt: totalUsdtValue.toFixed(2),
                rub: (+totalUsdtValue * 102).toFixed(2),
            };

            setUserState(userMe);
        }
    }, [assets]);

    return (
        <>
            {isUserLoading && isWalletLoading && isMarketLoading ? (
                <CircularProgress />
            ) : (
                <Col flex={1} mx={3} gap={4}>
                    <WalletUserCard user={userState} />
                    <WalletAssets assets={assets} />
                    <WalletHistory />
                </Col>
            )}
        </>
    );
};
