import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    styled
} from '@mui/material';

import './Header.scss';

const Header = () => {
    const { cart } = useSelector(state => state.cartReducer);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 5,
            border: `2px solid #c80000`
        }
    }));

    return (
        <AppBar position='static' sx={{ bgcolor: 'rgba(33, 33, 33, 0.8)' }}>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h1'>
                        Deli{''}
                        <Typography
                            variant='h1'
                            component={'span'}
                            sx={{
                                display: 'inline-block',
                                color: 'rgba(33, 33, 33, 0.8)',
                                bgcolor: '#ffffff',
                                backgroundSize: '30px',
                                pb: '5px',
                                borderRadius: '2px'
                            }}
                        >
                            very
                        </Typography>
                    </Typography>
                    <Box>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'link active' : 'link'
                            }
                        >
                            <Button>
                                <Typography variant='subtitle2'>
                                    Shop
                                </Typography>
                            </Button>
                        </NavLink>
                        <NavLink
                            to='/history'
                            className={({ isActive }) =>
                                isActive ? 'link active' : 'link'
                            }
                        >
                            <Button>
                                <Typography variant='subtitle2'>
                                    History
                                </Typography>
                            </Button>
                        </NavLink>
                        <NavLink
                            to='/shopcart'
                            className={({ isActive }) =>
                                isActive ? 'active' : 'icon'
                            }
                        >
                            <Button>
                                <StyledBadge
                                    badgeContent={cart.length}
                                    color='secondary'
                                >
                                    <ShoppingCart sx={{ color: '#FFF' }} />
                                </StyledBadge>
                            </Button>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
