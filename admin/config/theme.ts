import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';

const font = Inter({ weight: ['400', '700'], subsets: ['latin', 'cyrillic'] });

const theme = createTheme({
    palette: {
        mode: 'dark', // Включение темного режима

        background: {
            default: 'rgb(13, 29, 41)', // Цвет фона для всего приложения
            paper: '#1d1d1d', // Цвет фона для карточек, окон и т.д.
        },

        primary: {
            main: '#90caf9', // Светлый оттенок синего для primary
        },
        secondary: {
            main: '#f48fb1', // Светлый розовый оттенок для secondary
        },
        error: {
            main: '#f44336', // Цвет для ошибок
        },
        warning: {
            main: '#ff9800', // Цвет для предупреждений
        },
        info: {
            main: '#2196f3', // Цвет для информации
        },
        success: {
            main: '#4caf50', // Цвет для успешных состояний
        },
        text: {
            primary: '#e0e0e0', // Светлый цвет для основного текста
            secondary: '#b0b0b0', // Светлый цвет для вторичного текста
        },
    },
    typography: {
        allVariants: font.style,
    },
    spacing: 8, // Стандартное расстояние для отступов
    shape: {
        borderRadius: 8, // Скругление углов
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
                    textDecoration: 'none', // Убираем подчеркивание
                },
            },
        },
    },
});

export default theme;
