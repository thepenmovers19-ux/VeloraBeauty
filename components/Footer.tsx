import React, { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';

const Footer: React.FC = () => {
  const { showToast } = useGlobal();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Welcome to Velora! Subscribed: ${email}`);
    setEmail('');
  };

  const linkGroups = [
    {
      title: 'Shop',
      links: ['Best Sellers', 'Shop All', 'Sets & Bundles', 'Gift Cards'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Ingredients', 'Sustainability', 'Careers'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Shipping & Returns', 'Contact Us', 'Track Order'],
    },
    {
      title: 'Social',
      links: ['Instagram', 'TikTok', 'Facebook', 'Pinterest'],
    },
  ];

  return (
    <footer id="footer" className="bg-[#f0f2f5] dark:bg-[#0b0e14] pt-20 pb-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Signup */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-16 border-b border-gray-300 dark:border-gray-800">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-velora-black dark:text-white mb-2">
              Unlock 15% off your first order
            </h3>
            <p className="text-velora-gray dark:text-gray-400">
              Sign up for our newsletter to receive exclusive offers, wellness tips, and early
              access to new launches.
            </p>
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-velora-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="font-bold text-velora-black dark:text-white">{group.title}</h4>
              {group.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-velora-gray dark:text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-800 text-sm text-velora-gray dark:text-gray-500">
          <p>&copy; 2024 Velora Beauty. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;