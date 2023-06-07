import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

import '../../styles/index.scss';

const ShopPage = lazy(() => import('../../pages/ShopPage'));
const ShopCartPage = lazy(() => import('../../pages/ShopCartPage'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage'));

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<ShopPage />} />
                        <Route path='/shopcart' element={<ShopCartPage />} />
                        <Route path='/history' element={<HistoryPage />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
