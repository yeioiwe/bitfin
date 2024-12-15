import { Col } from '@/config/boxes';
import { Button, Link } from '@mui/material';

export const NavBar = () => {
    return (
        <Col gap={1} maxWidth={'250px'} width={'100%'}>
            <NavBarItem name={'Пользователи'} href="dashboard" />
            <NavBarItem name={'Блог'} href="dashboard" />
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
