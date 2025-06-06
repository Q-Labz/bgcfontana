import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NetworkSection from '../components/common/NetworkSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <NetworkSection />
      <Footer />
    </div>
  );
};

export default MainLayout;