import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const clubs = [
  {
    name: "Almeria Middle School",
    address: "7723 Almeria Avenue",
    city: "Fontana, CA 92336",
    email: "bgcfinfo@gmail.com",
    phone: "909-822-4988"
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

export function AffiliatedClubs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with Boys & Girls Clubs in your area. Each location offers unique programs 
            while maintaining our commitment to youth development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {club.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{club.address}</p>
                      <p className="text-gray-700">{club.city}</p>
                    </div>
                  </div>
                  
                  {club.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a 
                        href={`tel:${club.phone}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {club.phone}
                      </a>
                    </div>
                  )}

                  {club.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a 
                        href={`mailto:${club.email}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {club.email}
                      </a>
                    </div>
                  )}

                  {club.info && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600">{club.info}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}