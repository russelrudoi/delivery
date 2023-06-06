import { lazy, Suspense, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import { fetchMeals } from '../../http/mealAPI';
import '../../styles/index.scss';

const ShopPage = lazy(() => import('../../pages/ShopPage'));
const ShopCartPage = lazy(() => import('../../pages/ShopCartPage'));

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Suspense fallback={'load...'}>
                    <Routes>
                        <Route path='/' element={<ShopPage />} />
                        <Route path='/shopcart' element={<ShopCartPage />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
