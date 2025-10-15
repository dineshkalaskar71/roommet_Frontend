import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Koregaon Park',
      rating: 5,
      text: 'Found the perfect flatmate through Roommet! The verification process made me feel safe and the platform is super easy to use.',
      avatar: 'PS',
    },
    {
      name: 'Rahul Verma',
      location: 'Pune',
      rating: 5,
      text: 'The AI matching feature is amazing! It connected me with flatmates who share similar interests and lifestyle. Highly recommended!',
      avatar: 'RV',
    },
    {
      name: 'Anjali Mehta',
      location: 'Kharadi',
      rating: 5,
      text: 'I was worried about finding a safe place as a working professional. Roommet made it so easy with verified listings and genuine people.',
      avatar: 'AM',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 text-[#1E1E1E]">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Real stories from real people who found their perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-[20px] md:rounded-[24px] p-5 md:p-8 hover:border-[#FF5E62] hover:shadow-xl transition-all relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 text-[#FF5E62] opacity-20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 fill-[#FF9966] text-[#FF9966]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#FF5E62] to-[#FF9966] flex items-center justify-center text-white text-sm md:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#1E1E1E]">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
