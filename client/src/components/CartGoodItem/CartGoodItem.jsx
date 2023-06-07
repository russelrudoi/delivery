import { useDispatch } from 'react-redux';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    IconButton
} from '@mui/material';
import { Add, Remove, HighlightOff } from '@mui/icons-material';
import { addGoodToCart, deleteGoodFromCart } from '../../store/cart/cartSlice';

const CartGoodItem = ({ cartGood, widthItem }) => {
    const dispatch = useDispatch();
    const { image, name, price, quantity } = cartGood;

    const changeQuantity = (item, quantity) => {
        dispatch(addGoodToCart({ ...item, quantity }));
    };

    const deleteGood = () => {
        dispatch(deleteGoodFromCart(cartGood));
    };

    return (
        <Grid item xs={widthItem}>
            <Card sx={{ display: 'flex', width: '100%' }}>
                <CardMedia
                    component='img'
                    alt={name}
                    image={image}
                    sx={{ width: '250px' }}
                />
                <Box flexGrow={5}>
                    <CardContent sx={{ p: 0 }}>
                        <Typography
                            gutterBottom
                            variant='subtitle1'
                            component='div'
                            textAlign={'center'}
                        >
                            {name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant='subtitle1'
                            component='div'
                            textAlign={'center'}
                        >
                            Price: {price}$
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <IconButton
                                onClick={() =>
                                    changeQuantity(
                                        cartGood,
                                        Math.max(1, quantity - 1)
                                    )
                                }
                            >
                                <Remove sx={{ color: 'white' }} />
                            </IconButton>
                            <Typography component={'span'}>
                                {quantity}
                            </Typography>
                            <IconButton
                                onClick={() =>
                                    changeQuantity(
                                        cartGood,
                                        Math.max(1, quantity + 1)
                                    )
                                }
                            >
                                <Add sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                        <Typography variant='subtitle2' textAlign={'center'}>
                            Total:{' '}
                            <Typography variant='subtitle1' component={'span'}>
                                {quantity * price}$
                            </Typography>
                        </Typography>
                    </CardContent>
                </Box>
                <IconButton
                    sx={{ alignSelf: 'self-start', color: 'white' }}
                    onClick={deleteGood}
                >
                    <HighlightOff />
                </IconButton>
            </Card>
        </Grid>
    );
};

export default CartGoodItem;
