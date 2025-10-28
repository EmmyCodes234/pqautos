import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CarSalesPage from './pages/CarSalesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FooterDemoPage from './pages/FooterDemoPage';
import AboutPage from './pages/AboutPage';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <Header />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/sales" element={<CarSalesPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/footer-demo" element={<FooterDemoPage />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;