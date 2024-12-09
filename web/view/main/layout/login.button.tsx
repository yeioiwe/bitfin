'use client';
import useAuth from '@/shared/hooks/auth';
import { StyledButton } from '@/shared/ui/styled.button';
import { useRouter } from 'next/navigation';
import MenuButton from './menu.button';

export const LoginButton = () => {
    const router = useRouter();
    const isToken = useAuth();

    return (
        <>
            {isToken ? (
                <MenuButton />
            ) : (
                <StyledButton variant="contained" onClick={() => router.push('/login')}>
                    Вход
                </StyledButton>
            )}
        </>
    );
};
