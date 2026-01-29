import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const Navbar: React.FC = () => {
  const { cart, toggleCart, scrollToSection } = useGlobal();
  
  const navLinks = [
    { label: 'Shop', id: 'shop' },
    { label: 'Science', id: 'science' },
    { label: 'Journal', id: 'journal' },
  ];

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e8ebf3] dark:bg-background-dark/80 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl lg:px-10">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth'}) }} className="flex items-center gap-2 text-velora-black dark:text-white">
            <span className="material-symbols-outlined text-primary text-3xl">spa</span>
            <span className="text-lg font-bold tracking-tight hidden md:block">Velora Beauty</span>
          </a>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex items-center gap-3 md:gap-8 mx-2">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="text-xs md:text-sm font-medium hover:text-primary transition-colors text-velora-black dark:text-gray-200"
            >
              {item.label}
            </button>
          ))}
          <button
              onClick={() => scrollToSection('footer')}
              className="text-xs md:text-sm font-medium hover:text-primary transition-colors text-velora-black dark:text-gray-200"
            >
              About
          </button>
        </nav>

        {/* Right: Utility Icons */}
        <div className="flex items-center justify-end gap-2 md:gap-6 shrink-0">
          {/* Search Input (Desktop) */}
          <div className="hidden md:flex items-center bg-[#f0f2f5] dark:bg-gray-800 rounded-full px-4 py-2 w-64 focus-within:ring-1 focus-within:ring-primary transition-all">
            <span className="material-symbols-outlined text-velora-gray text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none focus:ring-0 text-sm w-full text-velora-black dark:text-white placeholder-velora-gray ml-2 outline-none"
            />
          </div>

          {/* Search Icon (Mobile) */}
          <button className="md:hidden text-velora-black dark:text-white p-1">
            <span className="material-symbols-outlined text-[20px] md:text-[24px]">search</span>
          </button>

          <div className="flex gap-2 md:gap-3">
            <button className="hidden md:block text-velora-black dark:text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <button 
                onClick={toggleCart}
                className="text-velora-black dark:text-white hover:text-primary transition-colors relative p-1"
            >
              <span className="material-symbols-outlined text-[20px] md:text-[24px]">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-3 w-3 md:h-4 md:w-4 items-center justify-center rounded-full bg-primary text-[8px] md:text-[10px] text-white animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;