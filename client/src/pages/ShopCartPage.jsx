import { Button, Container, Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import GoodsList from '../components/GoodsList/GoodsList';
import CartGoodItem from '../components/CartGoodItem/CartGoodItem';
import { useSelector } from 'react-redux';
import { sumBy } from '../utils/sumBy';
import ModalSuccess from '../components/Modals/ModalSuccess';
import DeliveryMap from '../components/DeliveryMap/DeliveryMap';
import { FormProvider } from 'react-hook-form';
const ShopCartPage = () => {
    const { cart } = useSelector(state => state.cartReducer);

    const [openModal, setOpenModal] = useState(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (!cart.length) {
            setIsValid(false);
        }
    }, [cart]);

    const getValid = valid => {
        if (cart.length) {
            setIsValid(valid);
        }
    };

    return (
        <Container sx={{ p: '30px 0' }}>
            <Grid container spacing={2} marginBottom={'20px'}>
                <Grid item xs={6}>
                    {/* <DeliveryMap /> */}

                    <DeliveryForm getValid={getValid} />
                </Grid>
                <Grid item xs={6}>
                    <GoodsList height={'750px'}>
                        {cart.length ? (
                            cart.map(item => (
                                <CartGoodItem
                                    cartGood={item}
                                    key={item._id}
                                    widthItem={11}
                                />
                            ))
                        ) : (
                            <Typography
                                variant='subtitle1'
                                m='auto 0px'
                                fontSize='3rem'
                            >
                                Cart is empty
                            </Typography>
                        )}
                    </GoodsList>
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} spacing={10}>
                <Grid item>
                    <Typography variant='subtitle2' fontSize={'1.5rem'}>
                        Total price:{' '}
                        {sumBy(
                            cart.map(({ quantity, price }) => quantity * price)
                        )}
                        $
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='outlined'
                        color='error'
                        type='submit'
                        form='delivery-form'
                        onClick={() => (isValid ? setOpenModal(true) : null)}
                        disabled={!isValid}
                        sx={{ color: 'white' }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            {openModal && <ModalSuccess openModal={true} />}
        </Container>
    );
};

export default ShopCartPage;
