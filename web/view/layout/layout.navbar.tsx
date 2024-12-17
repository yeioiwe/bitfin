import { Col, Row } from '@/shared/ui/boxes';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import BookIcon from '@mui/icons-material/Book';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';

const navbarMenu = [
    { icon: <AccountBalanceWalletIcon />, text: 'Кошелек' },
    { icon: <AddCardIcon />, text: 'Вывод средств' },
    { icon: <CurrencyExchangeIcon />, text: 'Торговля' },
    { icon: <BookIcon />, text: 'Блог' },
    { icon: <HelpOutlineIcon />, text: 'Поддержка' },
];

export const NavbarLayout = () => {
    return (
        <Col gap={1}>
            {navbarMenu.map((m, i) => (
                <NavbarItem {...m} key={i} />
            ))}
        </Col>
    );
};

const NavbarItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
        <Row
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
