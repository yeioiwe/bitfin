import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    palette: {
        mode: 'dark',

        background: {
            default: 'rgb(13, 29, 41)',
            paper: '#1d1d1d',
        },

        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
        text: {
            primary: '#e0e0e0',
            secondary: '#b0b0b0',
        },
    },
    typography: {
        allVariants: font.style,
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
        },
    },
});

export default theme;
