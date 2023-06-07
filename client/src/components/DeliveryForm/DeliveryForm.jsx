import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import * as uuid from 'uuid';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import api from '../../api/axios';
import { clearCart } from '../../store/cart/cartSlice';
import { convertDate } from '../../utils/convertDate';
import DeliveryMap from '../DeliveryMap/DeliveryMap';
import NameAndEmailForm from './NameAndEmailForm';
import PhoneForm from './PhoneForm';

const libraries = ['places'];

const DeliveryForm = ({ showModal, total }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartReducer);

    const [destination, setDestination] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [allValid, setAllValid] = useState(false);
    const [inputAddress, setInputAddress] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isValid }
    } = useForm();

    const watchedInputAddress = useWatch({ control, name: 'address' });

    useEffect(() => {
        if (!isFocus) setDestination(watchedInputAddress);
    }, [watchedInputAddress, isFocus]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    });

    const submitData = handleSubmit(data => {
        if (!isValid || !allValid) return;
        const id = uuid.v4();

        const body = {
            ...data,
            total,
            orderId: id,
            orderDate: convertDate(new Date()),
            address: destination || inputAddress,
            meals: [...cart]
        };
        api.post('/user', body)
            .then(showModal(id))
            .then(dispatch(clearCart()))
            .then(reset())
            .catch(error => {
                console.log(error);
            });
    });

    const getInputAddress = address => {
        setIsFocus(false);
        setInputAddress(address);
    };

    const validateFields = (valid, address) => {
        setAllValid(valid);
        setDestination(address);
    };

    return (
        <Box
            pb='30px'
            sx={{
                bgcolor: 'background.paper',
                borderRadius: '10px'
            }}
        >
            <DeliveryMap
                inputAddress={inputAddress}
                validateFields={validateFields}
                isFocus={isFocus}
            />
            <form onSubmit={submitData} id='delivery-form-post-user'>
                <Box
                    sx={{
                        mt: '110px'
                    }}
                >
                    {isLoaded && (
                        <Autocomplete
                            onLoad={autocomplete => {
                                autocomplete.addListener('place_changed', () =>
                                    getInputAddress(
                                        autocomplete.getPlace()
                                            .formatted_address
                                    )
                                );
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <TextField
                                    sx={{
                                        width: '80%',
                                        '.css-x6vx7i-MuiInputBase-root-MuiOutlinedInput-root':
                                            {
                                                color: 'white'
                                            },
                                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline':
                                            {
                                                borderColor: 'white'
                                            }
                                    }}
                                    color='primary'
                                    id='outlined-basic'
                                    label='address'
                                    variant='outlined'
                                    form='delivery-form-post-user'
                                    placeholder='Write your address or use the map'
                                    inputProps={{
                                        onFocus: () => setIsFocus(true),
                                        onBlur: e => {
                                            getInputAddress(e.target.value);
                                        }
                                    }}
                                    {...register('address')}
                                />
                            </Box>
                        </Autocomplete>
                    )}

                    <NameAndEmailForm register={register} errors={errors} />
                </Box>
                <Box>
                    <PhoneForm
                        control={control}
                        errors={errors}
                        register={register}
                    />
                </Box>
            </form>
        </Box>
    );
};

export default DeliveryForm;
