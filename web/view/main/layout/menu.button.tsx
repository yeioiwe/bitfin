import theme from '@/shared/theme/theme';
import { Row } from '@/shared/ui/boxes';
import { StyledButton } from '@/shared/ui/styled.button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

export default function MenuButton() {
    const router = useRouter();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        if (typeof window !== 'undefined') {
            window.location.replace('/');
        }
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledButton
                sx={{
                    px: isSm ? '13px !important' : 0,
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Row gap={2}>
                    <AccountCircleIcon />
                    Профиль
                </Row>
            </StyledButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{ px: 4.3 }} onClick={() => router.push('/wallet')}>
                    <Row gap={2}>
                        <AccountBalanceWalletIcon />
                        Кошелек
                    </Row>
                </MenuItem>
                <MenuItem sx={{ px: 4.3 }} onClick={() => router.push('/')}>
                    <Row gap={2}>
                        <HomeIcon />
                        Главная
                    </Row>
                </MenuItem>
                <MenuItem sx={{ px: 4.3 }} onClick={handleLogout}>
                    <Row gap={2}>
                        <LogoutIcon />
                        Выход
                    </Row>
                </MenuItem>
            </Menu>
        </div>
    );
}
