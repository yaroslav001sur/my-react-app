import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import  HomePage  from './pages/HomePage';
import  CardsPage  from './pages/CardsPage';
import  NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cards" element={<CardsPage />} />
                    <Route path="posts" element={<CardsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};

export default App;