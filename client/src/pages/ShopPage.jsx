import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import ShopsList from '../components/ShopsList/ShopsList';
import GoodsList from '../components/GoodsList/GoodsList';
import GoodItem from '../components/GoodItem/GoodItem';
import { fetchShops } from '../store/shops/shopActions';

const ShopPage = () => {
    const { shops } = useSelector(state => state.shopReducer);
    const dispatch = useDispatch();

    const [shopsList, setShopList] = useState([]);

    useEffect(() => {
        dispatch(fetchShops());
    }, [dispatch]);

    useEffect(() => {
        if (shops.length) {
            setShopList(shops[0].meals);
        }
    }, [shops]);

    function getIdShop(id) {
        const list = shops.filter(item => item._id === id);
        setShopList(list[0].meals);
    }

    return (
        <Container sx={{ pt: '30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ShopsList
                        shops={shops}
                        getIdShop={getIdShop}
                        shopsList={shopsList}
                    />
                </Grid>
                <Grid item xs={8}>
                    <GoodsList shops={shops}>
                        {shopsList.map(item => (
                            <GoodItem
                                meal={item}
                                key={item._id}
                                widthItem={4}
                            />
                        ))}
                    </GoodsList>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopPage;
