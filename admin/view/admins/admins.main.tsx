'use client';
import { AdminType } from '@/config/api/api.schemas';
import { useAuthGetAdminList } from '@/config/api/auth/auth';
import { Col, Row } from '@/config/boxes';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export const AdminsMain = () => {
    const { data: admins } = useAuthGetAdminList();

    return (
        <Col gap={4} width={'100%'}>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Link href={'/newadmin'}>
                    <Button variant="contained">Добавить админа</Button>
                </Link>
            </Box>

            <Typography>Список админов:</Typography>

            <Col gap={2}>
                {admins?.items.map((a, i) => (
                    <AminItem admin={a} key={i} />
                ))}
            </Col>
        </Col>
    );
};

const AminItem = ({ admin }: { admin: AdminType }) => {
    return (
        <Row p={2} borderRadius={'6px'} justifyContent={'space-between'} border={'2px solid #1976d2'}>
            <Row gap={10}>
                <Typography fontWeight={700}>{admin.id}</Typography>
                <Typography fontWeight={700}>{admin.login}</Typography>
            </Row>
            <Typography fontWeight={700}>{admin.password}</Typography>
        </Row>
    );
};
