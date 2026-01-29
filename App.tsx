import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ScienceSection from './components/ScienceSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden">
      <Navbar />
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

export default App;