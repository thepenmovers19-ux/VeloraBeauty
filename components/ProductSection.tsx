import React from 'react';
import { Product } from '../types';
import { useGlobal } from '../context/GlobalContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useGlobal();

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f0f2f5] dark:bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${product.imageUrl}")` }}
        ></div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center pb-6">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-white/90 dark:bg-black/80 backdrop-blur text-velora-black dark:text-white text-sm font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>

        {/* Badge */}
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur px-2 py-1 rounded text-xs font-bold text-velora-black dark:text-white uppercase">
            Best Seller
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="text-velora-black dark:text-white text-lg font-bold">{product.name}</h3>
          <span className="text-velora-black dark:text-white font-medium">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-velora-gray dark:text-gray-400 text-sm">{product.subtitle}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`material-symbols-outlined text-[16px] ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400'
                  : i < product.rating
                  ? 'text-yellow-400' 
                  : 'text-gray-300'
              }`}
            >
             {i < Math.floor(product.rating) ? 'star' : (i < product.rating ? 'star_half' : 'star')}
            </span>
          ))}
          <span className="text-xs text-velora-gray ml-1">({product.reviewCount} reviews)</span>
        </div>
      </div>
    </div>
  );
};

const ProductSection: React.FC = () => {
  const { products } = useGlobal();

  return (
    <section id="shop" className="py-20 px-6 bg-white dark:bg-background-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-velora-black dark:text-white text-3xl md:text-4xl font-bold tracking-tight">
            Our Best Sellers
          </h2>
          <p className="text-velora-gray dark:text-gray-400 text-base max-w-xl">
            Discover the favorites that our community swears by for their daily glow routine.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2">
            View All Products
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;