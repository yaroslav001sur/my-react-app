import React from 'react'
import { Layout } from './components/Layout/Layout';
import Preloader from "./components/Preloader/Preloader";
import Hero from "./components/Hero/Hero";
import Quote from './components/Quote/Quote';
import Info from './components/Info/Info';
import Connect from "./components/Connect/Connect";
import Slider from './components/Slider/Slider';
import Cta from './components/Cta/Cta';



function App() {
    return (
        
        <Layout>
            <Preloader></Preloader>
            <Hero></Hero>
            <Quote></Quote>
            <Info></Info>
            <Connect></Connect>
            <Slider></Slider>
            <Cta></Cta>
        </Layout>
    )
}

export default App