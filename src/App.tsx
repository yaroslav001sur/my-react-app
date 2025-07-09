<<<<<<< HEAD
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
=======
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import Info from './components/Info/Info';
import Connect from './components/Connect/Connect';
import Slider from './components/Slider/Slider';
import Cta from './components/Cta/Cta';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Quote />
      <Info />
      <Connect />
      <Slider/>
      <Cta />
    </Layout>
  );
>>>>>>> d889c2923708192c984468de1f001272828abddd
};

export default App;