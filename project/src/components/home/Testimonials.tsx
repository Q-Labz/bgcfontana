import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The Boys & Girls Club has been a second home for my children. The mentoring and academic support they receive has transformed their confidence and performance in school.",
    name: "Maria Johnson",
    role: "Parent"
  },
  {
    quote: "I've watched my son grow from a shy kid to a confident young leader through the programs at the Boys & Girls Club. The staff truly care about each child's development.",
    name: "James Wilson",
    role: "Parent"
  },
  {
    quote: "Being part of the Boys & Girls Club taught me important life skills and gave me opportunities I wouldn't have had otherwise. It helped shape who I am today.",
    name: "Sarah Martinez",
    role: "Former Club Member"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <SectionHeader
          title="Success Stories"
          subtitle="Hear from the families and children whose lives have been impacted by our programs."
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-8 text-primary-500">
              <Quote size={48} />
            </div>
            
            <div className="pt-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;