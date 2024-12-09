'use client';
import { queryClient } from '@/shared/config/api/api.axios';
import theme from '@/shared/theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
