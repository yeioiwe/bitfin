import { AppLayout } from '../app.layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
