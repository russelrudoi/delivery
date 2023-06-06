import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Alert
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addGoodToCart } from '../../store/cart/cartSlice';

const GoodItem = ({ meal, widthItem }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartReducer);

    const { _id, name, price, image } = meal;

    const addToCart = () => {
        dispatch(addGoodToCart(meal));
    };
    return (
        <Grid item xs={widthItem}>
            <Card>
                <CardMedia
                    component='img'
                    alt={name}
                    image={`http://localhost:5000/image/${image}`}
                    sx={{ height: '170px' }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                    >
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant='subtitle2'
                        component='div'
                    >
                        {price}$
                    </Typography>
                    {/* <Button
                        color='inherit'
                        variant='outlined'
                        onClick={addToCart}
                        size='small'
                        sx={{ justifySelf: 'flex-end', color: 'white' }}
                    >
                        <Typography variant='subtitle2'>Add to cart</Typography>
                    </Button> */}
                    {cart.find(meal => meal._id === _id) ? (
                        <Alert
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: 'background.paper',
                                height: '30px',
                                pb: 0
                            }}
                            severity='success'
                        >
                            <Typography variant='subtitle1' p={0}>
                                In cart
                            </Typography>
                        </Alert>
                    ) : (
                        <Button
                            color='inherit'
                            variant='outlined'
                            onClick={addToCart}
                            size='small'
                            sx={{
                                justifySelf: 'flex-end',
                                color: 'white',
                                height: '30px'
                            }}
                        >
                            <Typography variant='subtitle2'>
                                Add to cart
                            </Typography>
                        </Button>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default GoodItem;
