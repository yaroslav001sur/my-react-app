import React from 'react';
<<<<<<< HEAD:src/components/Layout/Layout.tsx
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
=======
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
>>>>>>> d889c2923708192c984468de1f001272828abddd:src/components/Layout.tsx
};
