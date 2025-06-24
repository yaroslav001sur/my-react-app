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
};

export default App;