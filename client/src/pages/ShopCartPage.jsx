import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Grid, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { sumBy } from '../utils/sumBy';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import GoodsList from '../components/GoodsList/GoodsList';
import CartGoodItem from '../components/CartGoodItem/CartGoodItem';
import ModalSuccess from '../components/Modals/ModalSuccess';

const ShopCartPage = () => {
    const { cart } = useSelector(state => state.cartReducer);

    const [openModal, setOpenModal] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [verifiedRecaptcha, setVerifiedRecaptcha] = useState(false);
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        if (cart.length && verifiedRecaptcha) {
            setIsValid(true);
        }
    }, [cart, verifiedRecaptcha]);

    useEffect(() => {
        setTotal(sumBy(cart.map(({ quantity, price }) => quantity * price)));
    }, [cart]);

    const showModal = id => {
        setOrderId(id);
        setOpenModal(true);
    };

    const handlerRecaptcha = () => {
        setVerifiedRecaptcha(true);
    };

    // window.grecaptcha.catch(err => {
    //     console.error(err);
    // });

    return (
        <Container sx={{ p: '30px 0' }}>
            <Grid container spacing={2} marginBottom={'20px'}>
                <Grid item xs={6}>
                    <DeliveryForm showModal={showModal} total={total} />
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
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handlerRecaptcha}
            />
            <Grid container justifyContent={'flex-end'} spacing={10}>
                <Grid item>
                    <Typography variant='subtitle2' fontSize={'1.5rem'}>
                        Total price: {total}$
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='outlined'
                        color='error'
                        type='submit'
                        form='delivery-form-post-user'
                        disabled={!isValid}
                        sx={{ color: 'white' }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
            {openModal && <ModalSuccess openModal={true} id={orderId} />}
        </Container>
    );
};

export default ShopCartPage;
