import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    ThemeProvider,
    Toolbar,
    Typography,
    styled
} from '@mui/material';
import React from 'react';
import { buttonColor } from '../../styles/theme-styles';
import { ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px'
        }
    }));

    return (
        <AppBar position='static'>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h4'>Delivery</Typography>
                    <Box>
                        <ThemeProvider theme={buttonColor}>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                <Button color='secondary'>Shop</Button>
                            </NavLink>
                            <NavLink
                                to='/we'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                <Button color='secondary'>History</Button>
                            </NavLink>
                            <NavLink
                                to='/w'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                <Button color='secondary'>Coupons</Button>
                            </NavLink>
                        </ThemeProvider>
                        <NavLink
                            to='/shopcart'
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <IconButton aria-label='cart'>
                                <StyledBadge badgeContent={0} color='secondary'>
                                    <ShoppingCart sx={{ color: '#FFF' }} />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
