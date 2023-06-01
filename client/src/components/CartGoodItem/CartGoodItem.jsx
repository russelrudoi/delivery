import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    InputLabel,
    TextField,
    Typography
} from '@mui/material';

import GoodsImg from '../../assets/img/burger.jpg';
import { useForm } from 'react-hook-form';

const CartGoodItem = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm();

    return (
        <Card sx={{ display: 'flex', width: '100%' }}>
            <CardMedia
                component='img'
                alt='burger'
                image={GoodsImg}
                sx={{ width: '250px' }}
            />
            <Box flexGrow={2}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                        textAlign={'center'}
                    >
                        Big Big Burger
                    </Typography>
                    <Typography
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                        textAlign={'center'}
                    >
                        Price: 34$
                    </Typography>
                    <form id='delivery-form'>
                        <TextField
                            sx={{ width: '100%', textAlign: 'center' }}
                            id='outlined-basic'
                            label='count'
                            variant='outlined'
                            type='number'
                            defaultValue={1}
                            inputProps={{ min: 1, max: 100 }}
                            {...register('count', {
                                required: 'Field is required'
                            })}
                        />
                        <Typography component={'div'}>
                            {errors.count && (
                                <Typography color={'red'}>
                                    {errors.count.message || 'Error'}
                                </Typography>
                            )}
                        </Typography>
                    </form>
                </CardContent>
            </Box>
        </Card>
    );
};

export default CartGoodItem;
