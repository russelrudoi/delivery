import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import GoodsList from '../components/GoodsList/GoodsList';
import CartGoodItem from '../components/CartGoodItem/CartGoodItem';

const ShopCartPage = () => {
    const arr = [<CartGoodItem />];

    return (
        <Container sx={{ p: '15px 0' }}>
            <Grid container spacing={2} marginBottom={'20px'}>
                <Grid item xs={6}>
                    <DeliveryForm />
                </Grid>
                <Grid item xs={6}>
                    <GoodsList widthItem={12} height={75}>
                        {arr}
                    </GoodsList>
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} spacing={10}>
                <Grid item>
                    <Typography variant='h5'>Total price: 54$</Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        type='submit'
                        form='delivery-form'
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopCartPage;
