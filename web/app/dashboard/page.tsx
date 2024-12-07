'use client';
import axiosInstance from '@/shared/config/axios.instrance';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [user, setUser] = useState<any | undefined>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get('/user');
                setUser(response.data);
            } catch (err) {}
        };

        fetchUserData();
    }, []);

    if (!user) return <Box>Loading</Box>;

    return <Typography>{user.balance}</Typography>;
}
