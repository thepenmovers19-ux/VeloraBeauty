import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';

// Mock Database Initial Data
const INITIAL_DB = {
  products: [
    {
      id: 1,
      name: 'Velora Collagen Original',
      price: 55.00,
      subtitle: 'Marine Collagen Peptides',
      rating: 4.5,
      reviewCount: 128,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSWKlMpz776eyV1ScBD_HdgpyIububomNEE4E318UUZAmQzU4CZwR0Awa9XvWDeBjg-fbf9y9opi8bR7nezNI5A8XwQAIU1qae2udlASOHbw4xEl-w3l8-L-i9foW-Zvv57XgocpCCuN9UZ2o0LG458hPCk8gTTGgoGcAMILR8sZrYakxYkyUTO9gLXZ7ydwYiSam5jwvfOftq51vgAewv2sUwbA9gDHcbzthUaYp3kzToduUyjrLm4gTrXaW-SdczfocaiFxLFis',
      isBestSeller: true
    },
    {
      id: 2,
      name: 'Radiance Capsules',
      price: 40.00,
      subtitle: 'Skin Brightening Complex',
      rating: 5,
      reviewCount: 84,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh629OBKzdGrc-g_ZqpzgqNbB0yBqDMhXtCfJgFq1oB4hLjAQZaBnJ8ss1e7ur79hXOJrcLY4yWR6qBcTpYBorvyuaVoslSuN1fhcPigxMMq6Nm9ZFClhMsum3qffbakjiBIaHSjJed8mf6aCuFKz-e324kXI5lUaEmBFRW9X4iSKJTOUdHE6wHOQAGxwBCabv6hhPXg_vAcR0EOl-ztY2Qbjv6fgzHu7eZW6r8HdFhWFHBWS_rHDg0AW-Gdlc8khRLfK6i900Zq8'
    },
    {
      id: 3,
      name: 'Hydration Elixir',
      price: 32.00,
      subtitle: 'Electrolyte & Vitamin Boost',
      rating: 4,
      reviewCount: 45,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmi3qEfv4TsOLKrQ0RvsLyOd5yA7yGSJBQtxHnPkNr7sdZ0vJm0OH47sWxBgnCkFev-JiHO-7Ghbo_sBshs14Uu1MrO8T5P0j6opljjSEpFBtlBgW9bcABkQ-LWIdSJJqZZIi75aqb4rlvqy4QFWOp-LvcRJscG6JTrKJSFR2TGhdohsRqy8kR2CbByHP12gp-UKMD2wNGXsjb-0zFSvXNpnIVLWAsaKo91-iEgC-zGoMt1Txd2cf6_EOZ4ISjtBDC4kdM6g1dDzA'
    },
    {
      id: 4,
      name: 'Daily Glow Powder',
      price: 45.00,
      subtitle: 'Superfood Berry Blend',
      rating: 5,
      reviewCount: 210,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4YzuD5hH8Si275p7Q3qhmu2MX_bvrEyb05p9Iyq3PGNHQcWFQpMej_ro-uyyRfK9uy2TarNwavvBlwpRqd4BhM7HT4LGtQkKuaSkcMXI8UUxz9BVOF8MxbnkTLepWny6mT4_FESB92Zm2WgAVFwosygiEDgCqqGwouJjRYLmSX60KgxDqp7C2ebVV5_u7rIJyn2lADbO-Qd1d4wsd0MC-ePM7lok_9FPybVevpp7UErn2zuS1lXOPiu-HFhnmWc85GMKreFTytE'
    }
  ]
};

interface GlobalContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  products: Product[];
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  scrollToSection: (id: string) => void;
  showToast: (message: string) => void;
  toastMessage: string | null;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(INITIAL_DB.products);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from "Fake DB" (LocalStorage) on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velora_cart_db');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from storage:", error);
        localStorage.removeItem('velora_cart_db');
      }
    }
  }, []);

  // Save to "Fake DB" (LocalStorage) whenever cart changes
  useEffect(() => {
    localStorage.setItem('velora_cart_db', JSON.stringify(cart));
  }, [cart]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
        showToast("Section coming soon!");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        isCartOpen,
        products,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        scrollToSection,
        showToast,
        toastMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};