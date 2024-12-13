'use client';
import { Col } from '@/config/boxes';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export const DashboardMain = () => {
    const router = useRouter();
    return (
        <Col width={'100%'} gap={4}>
            <NewUserButton onClick={() => router.push('/add')} />

            <Typography fontWeight={700}>Список пользователей:</Typography>
        </Col>
    );
};

const NewUserButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Box onClick={() => onClick()} display={'flex'} justifyContent={'flex-end'}>
            <Button variant="contained">Добавить пользователя</Button>
        </Box>
    );
};
