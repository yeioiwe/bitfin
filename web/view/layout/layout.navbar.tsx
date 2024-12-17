'use client';
import { Col, Row } from '@/shared/ui/boxes';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import BookIcon from '@mui/icons-material/Book';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbarMenu = [
    { icon: <AccountBalanceWalletIcon />, text: 'Кошелек', pathname: '/wallet' },
    { icon: <AddCardIcon />, text: 'Вывод средств', pathname: '/withdraw' },
    { icon: <CurrencyExchangeIcon />, text: 'Торговля', pathname: '/traiding' },
    { icon: <BookIcon />, text: 'Блог', pathname: '/blog' },
    { icon: <HelpOutlineIcon />, text: 'Поддержка', pathname: '/support' },
];

export const NavbarLayout = () => {
    const pathname = usePathname();
    return (
        <Col gap={1}>
            {navbarMenu.map((m, i) => (
                <Link style={{ textDecoration: 'none' }} href={m.pathname} key={i}>
                    <NavbarItem current={pathname === m.pathname} {...m} />
                </Link>
            ))}
        </Col>
    );
};

const NavbarItem = ({ icon, text, current }: { icon: React.ReactNode; text: string; current: boolean }) => {
    return (
        <Row
            color={current ? '#01c095' : 'white'}
            sx={{ cursor: 'pointer' }}
            justifyContent={'flex-start'}
            bgcolor={'#172d3e'}
            gap={2}
            py={1}
            px={4}
            borderRadius={'5px'}
        >
            {icon}
            <Typography>{text}</Typography>
        </Row>
    );
};
