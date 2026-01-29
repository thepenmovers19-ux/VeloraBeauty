import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Content Side */}
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Our Philosophy
            </span>
            <h2 className="text-velora-black dark:text-white text-4xl md:text-5xl font-bold leading-tight">
              Beauty that goes beyond the surface.
            </h2>
            <div className="space-y-6 text-lg text-velora-gray dark:text-gray-300 leading-relaxed">
              <p>
                At Velora Beauty, we believe that true radiance starts from within. In a world obsessed with
                quick fixes and surface-level treatments, we champion a holistic approach to beauty—one that
                nourishes your body, elevates your wellness, and respects the planet.
              </p>
              <p>
                Founded in 2024 by a collective of dermatologists and nutritionists, Velora was born from a 
                simple question: <em className="text-velora-black dark:text-white font-serif">"What if your skincare routine started with what you eat?"</em>
              </p>
              <p>
                Our clinically-backed formulations bridge the gap between nutritional science and luxury beauty.
                We source only the purest, most bio-available ingredients from sustainable partners around the globe,
                ensuring that every capsule, powder, and elixir delivers potent results without compromising on ethics.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">100%</p>
              <p className="text-sm font-medium text-velora-black dark:text-white">Clean Ingredients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">50k+</p>
              <p className="text-sm font-medium text-velora-black dark:text-white">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">Cruelty</p>
              <p className="text-sm font-medium text-velora-black dark:text-white">Free Forever</p>
            </div>
          </div>
          
          <div className="pt-4">
             <button className="px-8 py-4 bg-velora-black dark:bg-white text-white dark:text-velora-black font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                Read Our Full Story
             </button>
          </div>
        </div>

        {/* Image Grid Side */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 sticky top-24">
           <div className="space-y-4 md:space-y-6 mt-12">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transform translate-y-4 transition-transform hover:-translate-y-2 duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKfJb4kwRIFywUet8WiDZYTbJ4yG5n3haAFOImO9xjdVNTN79NXIA8vrU7g4_NjvCTxNk5zfQ5QmzhGDeqKXO1aZPNWbiUshCEaB1RrgjxeiS79pIcSpkcvbbGlpgQqbrLvWOIBxxFGM1zSgrrwr8y_1fGSqV1z7Ubp0RUviXms_WIFR0Qa1X9st53oXJz6cFAAT9OZ1A1r2MYqcyUY4SaI8SfbtIisIEmEviEQCn4dEKWoW5iordN5d8r9zy_I_Ps9nc_U7Q1iMM" 
                  alt="Minimalist ingredients" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="p-6 bg-background-light dark:bg-gray-800 rounded-2xl border border-white/50 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-3xl text-primary mb-3">eco</span>
                <h4 className="font-bold text-lg mb-2 text-velora-black dark:text-white">Sustainable Sourcing</h4>
                <p className="text-sm text-velora-gray dark:text-gray-400">We prioritize plastic-free packaging and ethically harvested marine collagen.</p>
             </div>
           </div>
           
           <div className="space-y-4 md:space-y-6">
             <div className="p-6 bg-primary text-white rounded-2xl shadow-lg bg-gradient-to-br from-primary to-blue-600">
                <span className="material-symbols-outlined text-3xl mb-3">science</span>
                <h4 className="font-bold text-lg mb-2">Clinically Proven</h4>
                <p className="text-sm text-white/90">Our formulas undergo rigorous third-party testing for purity and potency.</p>
             </div>
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4TRKCpmjBXP-wylMneab7eJ4X-u5-5NZ6DnaQiPwYp85_dc6R2KfqJXVrnOavVIZ1h1XdCXccWtPNyjq1yUokyOJBY1M6Do33vpPMvhciYgnGMmnnD5Idy0uX3t5szaICfwETUg0MOxuqiMmH2jQ9Dh1OOQPVooiNaE2cM6NI-w0RacmTWrwWfae4wV-o4E8zU0fJ51oYDwoTjSRBKryiWPTFwfFOc2BaSNJDix2by2xXgLxMA-t4guCncW3qVfAhZhjKDdOBojM" 
                  alt="Woman enjoying product" 
                  className="w-full h-full object-cover"
                />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;