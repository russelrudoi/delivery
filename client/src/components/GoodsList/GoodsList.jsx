import { Box, Grid, List, ListItem } from '@mui/material';
import React from 'react';

const GoodsList = ({ children, height = '80vh' }) => {
    return (
        <Box>
            <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    height: height,
                    display: 'flex',
                    flexWrap: 'wrap',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
            >
                <Grid container justifyContent={'space-around'} gap={3}>
                    {children}
                </Grid>
            </List>
        </Box>
    );
};

export default GoodsList;
