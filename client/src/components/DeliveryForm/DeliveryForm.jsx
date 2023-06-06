import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/cart/cartSlice';
import api from '../../api/axios';
import { convertDate } from '../../utils/convertDate';
import DeliveryMap from '../DeliveryMap/DeliveryMap';

const DeliveryForm = ({ getValid }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartReducer);
    const [isAddress, setIsAddress] = useState(false);

    const fieldsName = [
        {
            name: 'name',
            validation: { maxLength: 20, message: 'Too long name' }
        },
        {
            name: 'email',
            validation: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
            }
        },
        { name: 'phone', validation: {} }
    ];

    const methods = useForm();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = methods;

    useEffect(() => {
        console.log(isValid);
        getValid(isValid);
    }, [isValid, getValid]);

    const submitData = handleSubmit(data => {
        console.log(isValid);
        if (!isValid) return;

        const body = {
            ...data,
            orderDate: convertDate(new Date()),
            meals: [...cart]
        };
        console.log(body);
        api.post('/user', body)
            .then(dispatch(clearCart()))
            .then(reset())
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <Box
            // height={'400px'}
            pb='30px'
            sx={{
                bgcolor: 'background.paper',
                borderRadius: '10px'
            }}
        >
            {/* register={register} errors={errors} reset={reset} */}
            <FormProvider {...methods}>
                <DeliveryMap />
            </FormProvider>
            <form onSubmit={submitData} id='delivery-form'>
                {fieldsName.map(nameField => (
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        pt={'30px'}
                        key={nameField.name}
                    >
                        <TextField
                            sx={{
                                width: '80%',
                                m: '0 auto',
                                '.css-x6vx7i-MuiInputBase-root-MuiOutlinedInput-root':
                                    { color: 'white' },
                                '.css-1d3z3hw-MuiOutlinedInput-notchedOutline':
                                    { borderColor: 'white' }
                            }}
                            color='primary'
                            label={nameField.name}
                            variant='outlined'
                            {...register(nameField.name, {
                                required: 'Field is required',
                                pattern: nameField.validation
                            })}
                        />
                        <Typography component={'div'}>
                            {errors[nameField.name] && (
                                <Typography color={'red'}>
                                    {errors[nameField.name].message || 'Error'}
                                </Typography>
                            )}
                        </Typography>
                    </Box>
                ))}
            </form>
        </Box>
    );
};

export default DeliveryForm;
