import { Box, Button, List, ListItem, ListSubheader } from '@mui/material';
import React from 'react';

const ShopsBar = () => {
    const arr = [
        'Mac Donny',
        'CFK',
        'Burger Queen',
        'Winds',
        'Aromat kava',
        'Tea house',
        'Sunbucks'
    ];

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
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    height: '85vh',
                    '& ul': { padding: 0 },
                    padding: '0 0 10px'
                }}
            >
                <ListSubheader
                    color='inherit'
                    sx={{ fontWeight: '700', textAlign: 'center' }}
                >
                    Shops:
                </ListSubheader>
                {arr.map(item => (
                    <ListItem
                        sx={{
                            justifyContent: 'center',
                            m: '10px auto'
                        }}
                    >
                        <Button
                            variant='outlined'
                            sx={{ width: '75%', height: '50px' }}
                        >
                            {item}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShopsBar;
