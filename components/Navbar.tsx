import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e8ebf3] dark:bg-background-dark/80 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl lg:px-10">
        {/* Logo & Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-velora-black dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">spa</span>
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
          {['Shop', 'Science', 'About', 'Journal'].map((item) => (
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
            <button className="text-velora-black dark:text-white hover:text-primary transition-colors">
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
  );
};

export default Navbar;