import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    palette: {
        background: {
            default: '#141414',
        },
    },
    typography: {
        allVariants: {
            color: 'white',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff',
                    },
                    '& input': {
                        color: '#ffffff',
                    },
                },
            },
        },
    },
});

export default theme;
