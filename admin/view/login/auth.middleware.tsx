'use client';
import { usePathname, useRouter } from 'next/navigation';

export const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    if (pathname !== '/login') {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) router.push('/login');
    }

    return children;
};
