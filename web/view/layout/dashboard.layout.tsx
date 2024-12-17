import { Row } from '@/shared/ui/boxes';
import { NavbarLayout } from './layout.navbar';
import { TraidingLayout } from './traiding.layout';

export const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Row m={6} justifyContent={'space-between'} alignItems={'flex-start'}>
            <NavbarLayout />
            {children}
            <TraidingLayout />
        </Row>
    );
};
