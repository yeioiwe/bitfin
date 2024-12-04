'use client';
import { Footer } from '@/sections/footer/footer';
import { AppBarLayout } from '@/sections/layout/app.bar.layout';
import { AppLayout } from './app.layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppLayout>
                    <AppBarLayout />
                    {children}
                    <Footer />
                </AppLayout>
            </body>
        </html>
    );
}
