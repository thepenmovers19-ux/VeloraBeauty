import React from 'react';
import { useGlobal } from '../context/GlobalContext';

const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, showToast } = useGlobal();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    showToast("Checkout initiated! (Sandbox Mode)");
    // In a real app, this would redirect to a payment processor
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white dark:bg-background-dark shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-velora-black dark:text-white">Your Bag ({cart.length})</h2>
            <button
              onClick={toggleCart}
              className="p-2 text-velora-gray hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-gray-300">shopping_basket</span>
                <p className="text-lg text-velora-gray dark:text-gray-400">Your bag is empty.</p>
                <button 
                    onClick={toggleCart}
                    className="text-primary font-bold hover:underline"
                >
                    Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-velora-black dark:text-white line-clamp-1">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </div>
                        <p className="text-sm text-velora-gray dark:text-gray-400">{item.subtitle}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-velora-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-l-lg"
                          >
                            -
                          </button>
                          <span className="px-2 text-sm font-medium text-velora-black dark:text-white w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-velora-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-r-lg"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold text-velora-black dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-background-light dark:bg-[#0b0e14]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-velora-gray dark:text-gray-400">Subtotal</span>
                <span className="text-xl font-bold text-velora-black dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-center text-gray-400 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <button 
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/25"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;