'use client';
import { queryClient } from '@/shared/config/api/api.axios';
import theme from '@/shared/theme/theme';
import { Footer } from '@/view/main/footer/footer';
import { AppBarLayout } from '@/view/main/layout/app.bar.layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBarLayout />
                {children}
                <Footer />
            </ThemeProvider>
        </QueryClientProvider>
    );
};
