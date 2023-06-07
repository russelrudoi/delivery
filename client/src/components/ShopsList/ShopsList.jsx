import {
    Box,
    Button,
    List,
    ListItem,
    ListSubheader,
    Typography
} from '@mui/material';

const ShopsList = ({ shops, getIdShop, shopsList }) => {
    return (
        <Box pr={'10px'}>
            <List
                sx={{
                    p: 0,
                    position: 'relative',
                    overflow: 'auto',
                    width: '100%',
                    maxWidth: 360,
                    borderRadius: '10px',
                    backgroundColor: 'background.paper',
                    height: '80vh',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
            >
                <ListSubheader sx={{ textAlign: 'center' }}>
                    <Typography
                        variant='subtitle2'
                        fontSize={'1.2rem'}
                        pt={'10px'}
                    >
                        Shops:
                    </Typography>
                </ListSubheader>
                {shops.map(item => (
                    <ListItem
                        sx={{ justifyContent: 'center', mt: '10px' }}
                        key={item._id}
                    >
                        <Button
                            color='inherit'
                            variant='outlined'
                            onClick={() => getIdShop(item._id)}
                            sx={{
                                width: '75%',
                                height: '50px',
                                color:
                                    item.meals === shopsList ? 'red' : 'white'
                            }}
                        >
                            <Typography variant='subtitle1'>
                                {item.namePlace}
                            </Typography>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShopsList;
