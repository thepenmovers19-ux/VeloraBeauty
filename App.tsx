import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ScienceSection from './components/ScienceSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { GlobalProvider, useGlobal } from './context/GlobalContext';

// Toast Component
const Toast: React.FC = () => {
  const { toastMessage } = useGlobal();
  
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up">
      <div className="bg-velora-black/90 dark:bg-white/90 text-white dark:text-velora-black px-6 py-3 rounded-full shadow-xl text-sm font-medium backdrop-blur-md">
        {toastMessage}
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <Toast />
      <main>
        <Hero />
        <ProductSection />
        <ScienceSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
};

export default App;