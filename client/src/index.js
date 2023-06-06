import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { store } from './store/store';

import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme/theme-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);
