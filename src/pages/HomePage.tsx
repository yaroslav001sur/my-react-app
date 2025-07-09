import React from 'react';
import Hero from '../components/Hero/Hero';
import Quote from '../components/Quote/Quote';
import Info from '../components/Info/Info';
import Connect from '../components/Connect/Connect';
import Slider from '../components/Slider/Slider';
import Cta from '../components/Cta/Cta';
import CardList from '../components/CardList/CardList';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Info />
      <div className="cards-section">
        <CardList limit={3} />
      </div>
      <Connect />
      <Slider />
      <Cta />
    </>
  );
};

export default HomePage;