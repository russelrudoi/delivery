import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const DeliveryForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm();

    const submitData = handleSubmit(data => {
        console.log(data);
        reset();
    });

    return (
        <Box
            height={'75vh'}
            sx={{
                border: '1.5px solid gray',
                borderRadius: '10px',
                p: '0 10px'
            }}
        >
            <form onSubmit={submitData} id='delivery-form'>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        {...register('name', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.name && (
                            <Typography color={'red'}>
                                {errors.name.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='Email'
                        variant='outlined'
                        {...register('email', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.email && (
                            <Typography color={'red'}>
                                {errors.email.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='Phone'
                        variant='outlined'
                        {...register('phone', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.phone && (
                            <Typography color={'red'}>
                                {errors.phone.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='Address'
                        variant='outlined'
                        {...register('address', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.address && (
                            <Typography color={'red'}>
                                {errors.address.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
            </form>
        </Box>
    );
};

export default DeliveryForm;
