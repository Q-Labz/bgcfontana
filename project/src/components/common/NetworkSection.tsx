import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';

const locations = [
  {
    name: "Almeria Middle School",
    address: "7723 Almeria Avenue",
    city: "Fontana, CA 92336",
    phone: "909-822-4988",
    email: "bgcfinfo@gmail.com"
  },
  {
    name: "South Fontana/Southridge Middle School",
    address: "14500 Live Oak Avenue",
    city: "Fontana CA 92337",
    phone: "909-202-7723"
  },
  {
    name: "East Fontana (DHIA)/ DOLORES HUERTA INTERNATIONAL ACADEMY",
    address: "17777 Merrill Avenue",
    city: "Fontana CA 92335",
    phone: "909-365-0124"
  },
  {
    name: "BLOOMINGTON GROVE",
    address: "18028 Valley Blvd",
    city: "Bloomington CA 92316",
    phone: "909-822-4988",
    info: "General Information"
  },
  {
    name: "Tokay Elementary School",
    address: "7846 Tokay Ave.",
    city: "Fontana, CA 92336",
    phone: "909-822-4988",
    info: "General Information"
  }
];

const NetworkSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="Our Network"
          subtitle="Connect with Boys & Girls Clubs in your area. Each location offers unique programs while maintaining our commitment to youth development."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-gray-700">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    {location.email && (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                          {location.email}
                        </a>
                      </div>
                    )}
                    
                    {location.info && (
                      <p className="text-gray-600 mt-2">{location.info}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;