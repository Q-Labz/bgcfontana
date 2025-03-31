import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  {
    date: { month: 'MAY', day: '29' },
    title: 'SIP & SUPPORT',
    location: "SPAGGI'S EVENT CENTER",
    address: '16880 Seville Avenue, Fontana, CA 92335',
  },
  {
    date: { month: 'JUNE', day: '19' },
    title: 'DRIVING FOR GREAT FUTURES TOPGOLF TOURNAMENT',
    location: 'TOPGOLF ONTARIO',
    address: '1050 N. Archibald Ave., Ontario, CA 91764',
  },
  {
    date: { month: 'AUGUST', day: '25' },
    title: 'GOLF CLASSIC',
    location: 'SIERRA LAKES GOLF CLUB',
    address: '16600 Clubhouse Drive, Fontana, CA 92336',
  },
  {
    date: { month: 'OCTOBER', day: '25' },
    title: "MAYOR'S GREAT FUTURES GALA",
    location: "SPAGGI'S EVENT CENTER",
    address: '16880 Seville Avenue, Fontana, CA 92335',
  },
];

export function FeaturedEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-[#0088CC]">GREAT</span>{' '}
            <span className="text-[#6A1B9A]">FUTURES</span>
          </h1>
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-[#F57C00]">FUNDRAISING</span>{' '}
            <span className="text-[#8BC34A]">EVENTS</span>
          </h2>
          <div className="text-3xl font-bold text-gray-800">2025</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0088CC] relative"
            >
              <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-[#8BC34A] flex flex-col items-center justify-center text-white font-bold text-xl mb-4">
                    <span>{event.date.month}</span>
                    <span>{event.date.day}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">{event.title}</h3>
                </div>
                <div className="flex flex-col items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mb-2" />
                  <div className="text-center">
                    <div className="font-semibold">{event.location}</div>
                    <div>{event.address}</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="text-lg font-semibold text-[#8BC34A]">Coming Soon</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-[#0088CC] text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">SPONSORSHIP PACKAGES AVAILABLE</h3>
          <p className="text-xl mb-4">CONTACT TERRIE FOR DETAILS</p>
          <div className="space-y-2">
            <p>CEOBGCF@GMAIL.COM</p>
            <p>909-822-4988 # 7</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}