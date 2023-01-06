import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 14,
    },
    palette: {
        primary: {
            main: '#263E67',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FFCE75',
            contrastText: '#000000',
        },
        info: {
            main: '#8D918D',
            contrastText: '#000000',
        },
        neutral: {
            main: '#F5F5F5',
            contrastText: '#ffffff',
        },
        error: {
            main: '#DC3545',
            contrastText: '#000000',
        },
        success: {
            main: '#198754',
            contrastText: '#000000',
        }
    },
} as any);
