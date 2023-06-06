import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        allVariants: {
            color: '#ffffff'
        },
        h1: {
            fontFamily: ['Jura', 'Montserrat', 'sans-serif'].join(','),
            fontSize: '2.5rem',
            fontWeight: 700
        },
        subtitle1: {
            fontFamily: 'Jura'
        },
        subtitle2: {
            fontFamily: 'Montserrat',
            fontWeight: 400
        }
    },
    palette: {
        background: { paper: '#272727' },
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#373737'
        }
    }
});
export const buttonColor = theme =>
    createTheme({
        // ...theme,
        // palette: {
        //     ...theme,
        //     secondary: {
        //         main: '#FFF'
        //     }
        // }
    });
