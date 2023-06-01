import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import { buttonColor } from '../../../styles/theme-styles';

const ButtonItem = ({ text }) => {
    return (
        <ThemeProvider theme={buttonColor}>
            <Button color='seconda'>{text}</Button>
        </ThemeProvider>
    );
};

export default ButtonItem;
