import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Grid, Typography } from '@mui/material';
import { fetchUser } from '../http/userAPI';
import NameAndEmailForm from '../components/DeliveryForm/NameAndEmailForm';
import PhoneForm from '../components/DeliveryForm/PhoneForm';
import GoodsList from '../components/GoodsList/GoodsList';
import GoodItem from '../components/GoodItem/GoodItem';
import OrderIdForm from '../components/DeliveryForm/OrderIdForm';

const fieldsName = [
    {
        name: 'email',
        validation: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
        }
    }
];

const HistoryPage = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm();

    const submitData = data => {
        setError(null);
        fetchUser(data)
            .then(setOrders)
            .catch(({ response }) => setError(response.data));
        reset();
    };

    return (
        <Container>
            <Grid container mt={'30px'} gap={3} justifyContent={'center'}>
                <Grid
                    xs={4}
                    item
                    sx={{
                        bgcolor: 'background.paper',
                        borderRadius: '10px'
                    }}
                >
                    {error && (
                        <Typography
                            variant='subtitle1'
                            color={'red'}
                            textAlign={'center'}
                        >
                            {error}
                        </Typography>
                    )}
                    <form
                        onSubmit={handleSubmit(submitData)}
                        id='delivery-form-get-user'
                    >
                        <NameAndEmailForm
                            register={register}
                            errors={errors}
                            fields={fieldsName}
                        />
                        <PhoneForm
                            control={control}
                            errors={errors}
                            register={register}
                        />

                        <Button
                            variant='outlined'
                            color='error'
                            type='submit'
                            form='delivery-form-get-user'
                            sx={{
                                color: 'white',
                                display: 'block',
                                m: '30px auto 0'
                            }}
                        >
                            Search
                        </Button>
                    </form>
                    <OrderIdForm submitData={submitData} />
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        height: '80vh',
                        p: '10px 20px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    {orders.map(order => (
                        <React.Fragment key={order._id}>
                            <Grid
                                container
                                gap={2}
                                justifyContent={'space-between'}
                                m={'15px 0'}
                            >
                                <Grid item>
                                    <Typography variant='subtitle1'>
                                        Order from {order.orderDate}
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        Address: {order.address}
                                    </Typography>
                                </Grid>
                                <Typography variant='subtitle1'>
                                    Total: {order.total}$
                                </Typography>
                            </Grid>

                            <GoodsList shops={order} height='auto'>
                                {order.meals.map(meal => (
                                    <GoodItem
                                        button={false}
                                        meal={meal}
                                        key={meal._id}
                                        widthItem={4}
                                    />
                                ))}
                            </GoodsList>
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default HistoryPage;
