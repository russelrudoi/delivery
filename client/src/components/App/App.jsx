import { lazy, Suspense, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';
import { fetchMeals } from '../../http/mealAPI';

const MainPage = lazy(() => import('../../pages/MainPage'));
const ShopCartPage = lazy(() => import('../../pages/ShopCartPage'));

function App() {
    useState(() => {
        fetchMeals();
    }, []);
    return (
        <Router>
            <div className='App'>
                <Header />
                <Suspense fallback={'load...'}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/shopcart' element={<ShopCartPage />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
