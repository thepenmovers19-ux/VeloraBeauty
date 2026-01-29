import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] h-[85vh] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVfvV0bR5jZSPH3cOvK2o925sLJo7-KqslQFZuiYBhmTvKswilPfw-nKfa6OhVMM9zahnqEpPubRlFt4Nt2aRuBfSK_4Q9H9YewBUpBuTR5MQZ5GstqLmURxQwBumDeXTM1iTykVCf7-aHvWWetT-PM19himwH3l4RX6EPxOQOogy3xlOCXtLGIlBXvy8uLjknUQI3mdtJMOcqOZQNmSI-_A9mb65bgaAVDVaRxRjzvh6w31ZIbmZbeHnUgd3gLLyLecsdYLSY9WY")',
        }}
        role="img"
        aria-label="Close up of glowing healthy skin with soft lighting"
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-2 animate-fade-in-up">
          New Collection
        </span>
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm">
          Radiance from Within
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-sm">
          Clinically proven ingestible beauty formulations designed to nourish your skin, hair, and nails at the cellular level.
        </p>
        <div className="pt-4">
          <button className="bg-primary hover:bg-blue-700 text-white text-base font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/50">
            Shop The Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;