import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = ['Shop', 'Science', 'About', 'Journal'];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e8ebf3] dark:bg-background-dark/80 dark:border-gray-800">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl lg:px-10">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-velora-black dark:text-white hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <span className="text-lg font-bold tracking-tight md:hidden">Velora</span>
            </div>
          </div>

          {/* Desktop Left Nav - Brand */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-velora-black dark:text-white">
              <span className="material-symbols-outlined text-primary text-2xl">spa</span>
              <span className="text-lg font-bold tracking-tight">Velora Beauty</span>
            </a>
          </div>

          {/* Desktop Center Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors text-velora-black dark:text-gray-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Utility Icons */}
          <div className="flex items-center justify-end gap-4 lg:gap-6">
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
            <button className="md:hidden text-velora-black dark:text-white">
              <span className="material-symbols-outlined">search</span>
            </button>

            <div className="flex gap-3">
              <button className="hidden md:block text-velora-black dark:text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
              <button className="text-velora-black dark:text-white hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white dark:bg-background-dark transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 text-velora-black dark:text-white">
              <span className="material-symbols-outlined text-primary text-2xl">spa</span>
              <span className="text-lg font-bold tracking-tight">Velora Beauty</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="text-velora-black dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-medium text-velora-black dark:text-white hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            
            <hr className="border-gray-100 dark:border-gray-800 my-2" />
            
            <a 
              href="#" 
              className="flex items-center gap-4 text-lg font-medium text-velora-black dark:text-white hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined text-2xl">account_circle</span>
              My Account
            </a>
            <a 
              href="#" 
              className="flex items-center gap-4 text-lg font-medium text-velora-black dark:text-white hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
               <span className="material-symbols-outlined text-2xl">shopping_bag</span>
               Cart (2)
            </a>
          </nav>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;