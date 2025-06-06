import { motion } from 'framer-motion';
import Button from '../common/Button';

const DonationCTA = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/90 to-accent-800/90 z-10"></div>
        <img
          src="https://images.pexels.com/photos/8363775/pexels-photo-8363775.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
          >
            Make a Difference Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Your contribution helps provide essential programs and services to the youth in our community who need it most.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="https://checkout.square.site/merchant/5BAJDNY82TSXF/checkout/W72FSLSZT73LYS3YCSLYR6KB" variant="secondary" size="lg">
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;