'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc?: string;
};

type TestimonialsSectionProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

const TestimonialsSection = ({ title, subtitle, testimonials }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-city-teal/20">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                {testimonials[activeIndex].imageSrc ? (
                  <div className="relative w-full h-full">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                      <p>Avatar</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-city-blue text-white text-2xl font-bold">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                )}
              </div>
              
              <div>
                {/* Rating */}
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${star <= testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                
                {/* Name and Role */}
                <div>
                  <h4 className="text-lg font-bold text-city-dark-blue">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-city-blue w-8' : 'bg-gray-300'
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

export default TestimonialsSection;
