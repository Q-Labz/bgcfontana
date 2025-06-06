import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { register } from 'swiper/element/bundle';
import SectionHeader from '../common/SectionHeader';

// Register Swiper custom elements
register();

// Type for Swiper Container element
interface SwiperContainer extends HTMLElement {
  initialize: () => void;
  // Add other Swiper-specific properties and methods if needed
}

// Add type declarations for Swiper custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<SwiperContainer> & {
        init?: string | boolean;
        // If setting Swiper parameters as attributes, define them here
        // e.g., 'slides-per-view'?: string; loop?: string; 'autoplay-delay'?: string;
      }, SwiperContainer>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const supporters = [
  { name: "Ross Dress for Less", logo: "/logos/rosslogo.jpeg" },
  { name: "Best Best & Krieger LLP", logo: "/logos/bbklogo.jpeg" },
  { name: "Brethren Community Foundation", logo: "/logos/brethren-logo.png" },
  { name: "Burrtec Waste Industries, Inc.", logo: "/logos/burrteclogo.jpeg" },
  { name: "Dawn", logo: "/logos/dawnlogo.jpeg" },
  { name: "Dhindsa Group of Companies, Inc", logo: "/logos/dcglogo.jpeg" },
  { name: "Southern California Edison", logo: "/logos/edisonlogo.png" },
  { name: "Kidcents Rite Aid Foundation", logo: "/logos/kidcents.png" },
  { name: "Kaiser Permanente", logo: "/logos/kporglogo.jpeg" },
  { name: "Quality Management Group", logo: "/logos/qualitymglogo.png" }
];

const SupportersSection = () => {
  useEffect(() => {
    const swiperEl = document.querySelector<SwiperContainer>('swiper-container'); // Use the SwiperContainer interface
    
    if (swiperEl) { // Null check
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize(); // Now this should be fine
    }
  }, []);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeader
          title="Our Generous Supporters"
          subtitle="We are grateful for the support of these organizations that help make our mission possible."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <swiper-container init="false">
            {supporters.map((supporter, index) => (
              <swiper-slide key={index}>
                <div className="flex items-center justify-center h-32 px-8">
                  <img
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportersSection;