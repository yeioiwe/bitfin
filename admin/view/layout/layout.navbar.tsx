import { Col } from '@/config/boxes';
import { Box, Link, Typography } from '@mui/material';

export const NavBar = () => {
    return (
        <Col gap={1} maxWidth={'200px'}>
            <NavBarItem name={'Пользователи'} href="dashboard" />
            <NavBarItem name={'Пользователи'} href="dashboard" />
            <NavBarItem name={'Пользователи'} href="dashboard" />
            <NavBarItem name={'Пользователи'} href="dashboard" />
        </Col>
    );
};

const NavBarItem = ({ name, href }: { name: string; href: string }) => {
    return (
        <Link href={`/${href}`}>
            <Box sx={{ cursor: 'pointer' }} py={1} px={3} borderRadius={4} bgcolor={'#dfdfdf'}>
                <Typography fontWeight={700}>{name}</Typography>
            </Box>
        </Link>
    );
};
