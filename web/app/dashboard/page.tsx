'use client';
import { useUserGetUser } from '@/shared/config/api/user/user';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import TradingViewWidget from '@/view/dashboard/chart';
import { DashboardWallet } from '@/view/dashboard/dashboard.wallet';

import { TtraidnigHistory } from '@/view/dashboard/pair.history';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';

export default function Dashboard() {
    const { data: user, isLoading } = useUserGetUser();

    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    console.log({ user });

    if (!user || isLoading)
        return (
            <Box my={40} display={'flex'} justifyContent={'center'}>
                <CircularProgress />
            </Box>
        );

    return (
        <Col mx={isSm ? 2 : 6} my={10} gap={6}>
            <DashboardWallet user={user} />
            <TtraidnigHistory />

            <Col gap={4}>
                <Typography fontSize={'24px'} fontWeight={700} color="#fff">
                    Популярные торговые пары:
                </Typography>
                <TradingViewWidget />
            </Col>
        </Col>
    );
}
