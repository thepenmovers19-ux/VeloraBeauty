import React from 'react';

const ScienceSection: React.FC = () => {
  const features = [
    {
      icon: 'science',
      title: 'Hydrolyzed Marine Collagen',
      description: 'Sustainably sourced and broken down into peptides for superior absorption.',
    },
    {
      icon: 'health_and_safety',
      title: 'Potent Antioxidants',
      description: 'Rich in Vitamin C and E to protect cells from oxidative stress and free radicals.',
    },
    {
      icon: 'eco',
      title: 'Bio-Available',
      description:
        'Formulated for your body to use immediately, ensuring faster and more visible results.',
    },
  ];

  return (
    <section id="science" className="py-24 px-6 bg-background-light dark:bg-[#1a202e] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                The Science
              </span>
              <h2 className="text-velora-black dark:text-white text-3xl md:text-5xl font-bold leading-tight">
                Backed by science, powered by nature.
              </h2>
              <p className="text-velora-gray dark:text-gray-300 text-lg leading-relaxed">
                Our formulas are developed by leading dermatologists and nutritionists to ensure
                maximum efficacy. We believe in transparency and results you can see.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-velora-black dark:text-white font-bold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-velora-gray dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="flex items-center text-primary font-bold hover:gap-3 transition-all">
                Learn more about our process
                <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnp_9q8TIIq1q-3Tp1731w_9lg0Fd9yGR-FAVSJS55mPgHD9U9N8d7sdsu36NM9W5FWP3B96Wv7ArZXTcOl-uXwE7oaIpHq4aD1Zv7IVGzff-c3A8nuJ7DQdgfkspfh3H42379QNQAAp19BL0BUIEGojtWDoeQsZBFHK2OsnDUoN90qhdlIUnU4QDwBOF6Tsecw3cUA3SnNqi_QLKj2Ze2zMFkKvoR2uhoCgmQJm1LtZx0LsjZZJwjzwH3_7UCFfB8997JiytqGsE")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/90 dark:bg-black/90 backdrop-blur p-6 rounded-xl border-l-4 border-primary">
                <p className="text-velora-black dark:text-white font-medium italic">
                  "Velora Beauty has completely transformed my skin texture. It's the only
                  supplement that actually delivers on its promises."
                </p>
                <p className="text-velora-gray dark:text-gray-400 text-sm mt-4 font-bold">
                  — Dr. Sarah Jenkins, Dermatologist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;