import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

import GoodsImg from '../../assets/img/burger.jpg';

const GoodItem = () => {
    const request = () => {
        axios
            .get('http://localhost:5000/api/meal')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };

    useState(() => {
        request();
    }, []);

    return (
        <Card>
            <CardMedia
                component='img'
                alt='burger'
                image='http://localhost:5000/static/burger.jpg'
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant='subtitle1' component='div'>
                    Big Big Burger
                </Typography>
                <Button
                    variant='outlined'
                    size='small'
                    sx={{ justifySelf: 'flex-end' }}
                >
                    Add to cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default GoodItem;
