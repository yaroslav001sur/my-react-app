import React from 'react';
import  Header  from '../Header/Header';
import  Footer  from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
export const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
