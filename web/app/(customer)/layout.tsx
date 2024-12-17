import { DashboardLayout } from '@/view/layout/dashboard.layout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
