import React from 'react';
import { SocialImage } from '../types';

const socialImages: SocialImage[] = [
  {
    id: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdhE8ciOTcSFUrrsPenhOd2ro2009dZF3P366CP--BaRijdadZDyT64DrVKLbaH3j0XC5hz5hL0o-bpzRLJdsp-PFhEwTuKr0e2JrfzxaIXFSZYja_w5wdcAArtN-0Tk3i18IhzP5BNda35e0wcHjcG7BEpUNfEGwyOPcYGR5QfENSvaRqurLPb_1P2W8SBvGsfbmzufIK1QZ7laMFsr5ufr2-Pc9makHu7PIY4lXYtbqQXaZJiaWO-bbsvfuy23Bdz7817NeFQo',
    alt: 'User selfie'
  },
  {
    id: 2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKfJb4kwRIFywUet8WiDZYTbJ4yG5n3haAFOImO9xjdVNTN79NXIA8vrU7g4_NjvCTxNk5zfQ5QmzhGDeqKXO1aZPNWbiUshCEaB1RrgjxeiS79pIcSpkcvbbGlpgQqbrLvWOIBxxFGM1zSgrrwr8y_1fGSqV1z7Ubp0RUviXms_WIFR0Qa1X9st53oXJz6cFAAT9OZ1A1r2MYqcyUY4SaI8SfbtIisIEmEviEQCn4dEKWoW5iordN5d8r9zy_I_Ps9nc_U7Q1iMM',
    alt: 'Product arrangement'
  },
  {
    id: 3,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4TRKCpmjBXP-wylMneab7eJ4X-u5-5NZ6DnaQiPwYp85_dc6R2KfqJXVrnOavVIZ1h1XdCXccWtPNyjq1yUokyOJBY1M6Do33vpPMvhciYgnGMmnnD5Idy0uX3t5szaICfwETUg0MOxuqiMmH2jQ9Dh1OOQPVooiNaE2cM6NI-w0RacmTWrwWfae4wV-o4E8zU0fJ51oYDwoTjSRBKryiWPTFwfFOc2BaSNJDix2by2xXgLxMA-t4guCncW3qVfAhZhjKDdOBojM',
    alt: 'Healthy smoothie'
  },
  {
    id: 4,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqLfZbsv25b73TdEFnzLtuc9YICY44B4bV3SmhOf7Gu2HZGcZnj0W7boq_-_liFDo-MM0Ujh_29PzbDzpEg4Ux5GyYwtTG4KkK6OGrZo7mDMUjVtQuMB0Dk37E6WoiwODk_SOMTEEeyxGQqTo_ueqY0xfHWCP6K_iTQxocexrLQF0K_rhULF9OMHpETwLZIff685T-x0anaXJUirOAayCkeRdLnKwLZZnyAd2Lb0ipG-O4stRwxAbPi1frZjRGA4DO6wXz6bv_lbw',
    alt: 'Face mask'
  },
  {
    id: 5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2F6AGiLdHARx9Or0Wv69uBDaSUQRSr7f6WeEgY2877uIWO_5SmYK6bVOaxb4RPq3RxYFFpnv9CNvlmNEJQfEddlZLjjmrbDxzJpyfiGY28PnX5W5YfR1xtFmXl_DShRH1jc-tvljqpyNgOGsjy0N9RPf3z-Eg0PzHL0aRtAho0u9fytcZWxiKzRBBkJrbuoYP_nS4cP8QIK0bJ9Ij5aIXnC9LlEG91r2_152BPcj2Pu6dBRjcy2QtsrSlkuNuItXNR5CIOej-9EA',
    alt: 'Bedroom interior'
  }
];

const SocialSection: React.FC = () => {
  return (
    <section id="journal" className="py-20 bg-white dark:bg-background-dark overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-velora-black dark:text-white text-2xl font-bold mb-2">#VeloraLife</h2>
          <p className="text-velora-gray dark:text-gray-400">
            Join our community of glowing individuals.
          </p>
        </div>
        <a href="#" className="hidden md:block text-primary font-medium hover:underline">
          @velorabeauty
        </a>
      </div>

      {/* Scrolling Strip */}
      <div className="flex gap-4 overflow-x-auto pb-6 px-6 no-scrollbar snap-x">
        {socialImages.map((image) => (
          <div
            key={image.id}
            className="snap-center shrink-0 w-72 h-96 rounded-lg overflow-hidden relative group"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url("${image.imageUrl}")` }}
              role="img"
              aria-label={image.alt}
            ></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-white text-3xl">favorite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;