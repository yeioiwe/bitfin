'use client';
import { Row } from '@/shared/ui/boxes';
import { usePathname } from 'next/navigation';
import { NavbarLayout } from './layout.navbar';
import { TraidingLayout } from './traiding.layout';

export const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    return (
        <Row m={6} justifyContent={'space-between'} alignItems={'flex-start'}>
            <NavbarLayout />
            {children}
            {pathname === '/traiding' ? null : <TraidingLayout />}
        </Row>
    );
};
