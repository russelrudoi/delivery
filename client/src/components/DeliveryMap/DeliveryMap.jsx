import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer
} from '@react-google-maps/api';
import { useFormContext } from 'react-hook-form';

const libraries = ['places'];

const DeliveryMap = () => {
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [destinationAddress, setDestinationAddress] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);

    const {
        register,
        setValue,
        formState: { errors, isValid }
    } = useFormContext();

    const destinationRef = useRef();

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    });
    // const google = window.google;
    const shopPosition = { lat: 50.44043182101505, lng: 30.510806900146395 };

    if (!isLoaded) {
        return <div>not loaded</div>;
    }

    const handleMapClick = event => {
        const { latLng } = event;
        const coordinate = { lat: latLng.lat(), lng: latLng.lng() };

        calculateRoute(coordinate);
    };

    async function calculateRoute(coordinate) {
        if (!coordinate && destinationRef?.current.value === '') {
            return;
        }

        try {
            // eslint-disable-next-line no-undef
            const directionsService = new google.maps.DirectionsService();
            const results = await directionsService.route({
                origin: shopPosition,
                destination: coordinate || destinationRef.current.value,
                // eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING
            });

            setError(false);
            setDirectionsResponse(results);
            setDestinationAddress(results.routes[0].summary);
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].duration.text);
        } catch (error) {
            setAddress('');
            setValue(false);
            setError('Address not found');
        }
    }

    return (
        <Box height={'300px'} width={'100%'} mb={'165px'}>
            <GoogleMap
                onClick={handleMapClick}
                center={shopPosition}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false
                }}
            >
                <Marker
                    position={shopPosition}
                    icon={{
                        url: require('../../assets/img/icon_shop.png'),
                        scaledSize: { width: 50, height: 50 }
                    }}
                />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>

            <Box
                sx={{
                    mt: '15px'
                }}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-around'}
                    mb={'10px'}
                    gap={2}
                >
                    <Typography variant='subtitle2' component={'span'}>
                        Address: {destinationAddress}
                    </Typography>
                    <Typography variant='subtitle2' component={'span'}>
                        Duration: {duration}
                    </Typography>
                    <Typography variant='subtitle2' component={'span'}>
                        Distance: {distance}
                    </Typography>
                </Box>
                <Autocomplete>
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
                            inputRef={destinationRef}
                            variant='outlined'
                            form='delivery-form'
                            value={address}
                            placeholder='Write your address or use the map'
                            inputProps={{
                                onBlur: e => {
                                    calculateRoute(e.target.value);
                                },
                                onChange: e => {
                                    setAddress(e.target.value);
                                }
                            }}
                            {...register('address', {
                                required: 'Field is required'
                            })}
                        />
                    </Box>
                </Autocomplete>

                <Typography component={'div'} textAlign={'center'}>
                    {errors.address && (
                        <Typography color={'red'}>
                            {errors.address.message || 'Error'}
                        </Typography>
                    )}
                    {error && <Typography color={'red'}>{error}</Typography>}
                </Typography>
                <Button
                    onClick={() => calculateRoute()}
                    variant='outlined'
                    sx={{ maxWidth: '150px', display: 'block', m: '15px auto' }}
                >
                    <Typography variant='subtitle1'>Pave the way</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default DeliveryMap;
