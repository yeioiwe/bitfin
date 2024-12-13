import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    components: {
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
