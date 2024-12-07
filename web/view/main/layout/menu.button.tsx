import { StyledButton } from '@/shared/ui/styled.button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

export default function MenuButton() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
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
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Профиль
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
                <MenuItem sx={{ px: 4 }} onClick={() => router.push('/dashboard')}>
                    Кошелек
                </MenuItem>
                <MenuItem sx={{ px: 4 }} onClick={() => router.push('/')}>
                    Главная
                </MenuItem>
                <MenuItem sx={{ px: 4 }} onClick={handleLogout}>
                    Выход
                </MenuItem>
            </Menu>
        </div>
    );
}
