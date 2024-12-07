'use client';
import { StyledButton } from '@/shared/ui/styled.button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MenuButton from './menu.button';

export const LoginButton = () => {
    const router = useRouter();
    const [user, setUser] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) setUser(true);
    });

    return (
        <>
            {user ? (
                <MenuButton />
            ) : (
                <StyledButton variant="contained" onClick={() => router.push('/login')}>
                    Вход
                </StyledButton>
            )}
        </>
    );
};
