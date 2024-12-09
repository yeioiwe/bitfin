'use client';
import { Col, Row } from '@/config/boxes';
import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { useUserGetUserList } from '@/config/api/user/user';
import Link from 'next/link';
import { UserItem } from './user.item';

export const DashboardMain = () => {
    const { data: users, isLoading } = useUserGetUserList();

    if (!users || isLoading)
        return (
            <Box justifyContent={'center'} display={'flex'} my={10}>
                <CircularProgress />
            </Box>
        );

    return (
        <Col>
            <Link target="_blank" href={'/add'}>
                <Button variant="contained">создать пользователя</Button>
            </Link>

            <Col gap={2} mt={2}>
                <Typography>Список пользователей:</Typography>
                <Row justifyContent={'space-between'}>
                    <Typography>id</Typography>
                    <Typography>username</Typography>
                    <Typography>balance</Typography>
                </Row>

                {users.items.map((u, i) => (
                    <UserItem key={i} id={u.id} balance={u.balance} username={u.username} />
                ))}
            </Col>
        </Col>
    );
};
