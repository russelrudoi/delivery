import { Box, Grid, List, ListItem } from '@mui/material';
import React from 'react';

const GoodsList = ({ children, widthItem, height = 85 }) => {
    console.log(children);
    return (
        <Box
            sx={{
                border: '1.5px solid gray',
                borderRadius: '10px',
                p: '0 10px'
            }}
        >
            <List
                sx={{
                    width: '100%',

                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    height: `${height}vh`,
                    '& ul': { padding: 0 },
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                <Grid container>
                    {children.map(item => (
                        <Grid item xs={widthItem}>
                            <ListItem>{item}</ListItem>
                        </Grid>
                    ))}
                </Grid>
            </List>
        </Box>
    );
};

export default GoodsList;
