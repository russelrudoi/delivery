import { Container, Grid } from '@mui/material';
import React from 'react';
import ShopsBar from '../components/ShopsBar/ShopsBar';
import GoodsList from '../components/GoodsList/GoodsList';
import GoodItem from '../components/GoodItem/GoodItem';

const MainPage = () => {
    const arr = [<GoodItem />, <GoodItem />];
    return (
        <Container sx={{ p: '15px 0px' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ShopsBar />
                </Grid>
                <Grid item xs={8}>
                    <GoodsList widthItem={4}>{arr}</GoodsList>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainPage;
