import { Row } from '@/config/boxes';
import { NavBar } from '@/view/layout/layout.navbar';
import { AppLayout } from '../app.layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppLayout>
                    <Row m={6} gap={4} justifyContent={'flex-start'} alignItems={'flex-start'}>
                        <NavBar />
                        {children}
                    </Row>
                </AppLayout>
            </body>
        </html>
    );
}
