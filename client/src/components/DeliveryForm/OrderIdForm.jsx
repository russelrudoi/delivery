import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';

const OrderIdForm = ({ submitData }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const handler = handleSubmit(data => {
        submitData(data);
        reset();
    });

    return (
        <form onSubmit={handler} id='delivery-form-get-user-id'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    pt: '30px'
                }}
            >
                <TextField
                    sx={{
                        width: '80%',
                        m: '0 auto',
                        '.css-x6vx7i-MuiInputBase-root-MuiOutlinedInput-root': {
                            color: 'white'
                        },
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white'
                        }
                    }}
                    color='primary'
                    label='Id order'
                    variant='outlined'
                    {...register('orderId', {
                        required: 'Field is required'
                    })}
                />

                <Typography component={'div'}>
                    {errors.orderId && (
                        <Typography color={'red'} textAlign={'center'}>
                            {errors.orderId.message || 'Error'}
                        </Typography>
                    )}
                </Typography>
            </Box>
            <Button
                variant='outlined'
                color='error'
                type='submit'
                form='delivery-form-get-user-id'
                sx={{
                    color: 'white',
                    display: 'block',
                    m: '30px auto 0'
                }}
            >
                Search by id
            </Button>
        </form>
    );
};

export default OrderIdForm;
