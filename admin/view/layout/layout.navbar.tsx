'use client';
import { useAuthGetMe } from '@/config/api/auth/auth';
import { Col } from '@/config/boxes';
import { Button, Link, Typography } from '@mui/material';

export const NavBar = () => {
    const { data: admin } = useAuthGetMe();

    return (
        <Col gap={1} maxWidth={'250px'} width={'100%'}>
            <Typography>admin id: {admin?.id}</Typography>
            {admin?.root ? <NavBarItem name={'Админы'} href="admins" /> : null}
            <NavBarItem name={'Пользователи'} href="dashboard" />
            <NavBarItem name={'Блог'} href="blog" />
        </Col>
    );
};

const NavBarItem = ({ name, href }: { name: string; href: string }) => {
    return (
        <Link href={`/${href}`}>
            <Button fullWidth variant="outlined">
                {name}
            </Button>
        </Link>
    );
};
