import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';

const Spinner = () => {
    return (
        <Container>
            <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                height={'100vh'}
            >
                <CircularProgress />
            </Grid>
        </Container>
    );
};

export default Spinner;
