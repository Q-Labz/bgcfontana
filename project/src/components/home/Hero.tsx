import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex items-center bg-primary-50">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90 z-10"></div>
        <img
          src="https://images.pexels.com/photos/8363103/pexels-photo-8363103.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Children at Boys & Girls Club"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Empowering Youth, <span className="text-secondary-400">Building Futures</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              For over 25 years, the Boys & Girls Club of Fontana has provided a safe place where young people can learn, grow, and build a bright future.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button to="/programs" size="lg" variant="secondary">
              Our Programs
            </Button>
            <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" size="lg" variant="accent">
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;