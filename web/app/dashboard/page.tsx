'use client';
import axiosInstance from '@/shared/config/axios.instrance';
import theme from '@/shared/theme/theme';
import { Col } from '@/shared/ui/boxes';
import TradingViewWidget from '@/view/dashboard/chart';

import { DashboardMain } from '@/view/dashboard/main.dashboard';
import { TtraidnigHistory } from '@/view/dashboard/pair.history';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [user, setUser] = useState<any | undefined>(null);
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get('/user');
                console.log(response.data);
                setUser(response.data);
            } catch (err) {}
        };

        fetchUserData();
    }, []);

    if (!user) return <Box></Box>;

    return (
        <Col mx={isSm ? 2 : 6} my={10} gap={6}>
            <DashboardMain user={user} />
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