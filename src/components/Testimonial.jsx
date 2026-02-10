import React, { useState } from 'react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "Jane Doe", title: "CEO", quote: "Working with this team has been an absolute pleasure."},
    { id: 2, name: "John Smith", title: "Director", quote: "The results exceeded our expectations! Fantastic service!"},
    { id: 3, name: "Emily White", title: "Founder", quote: "Professional, efficient, and incredibly insightful."},
    { id: 4, name: "Michael B.", title: "Manager", quote: "Our experience was seamless from start to finish."},
    { id: 5, name: "Sophia Lee", title: "Designer", quote: "Simply the best! They understood our vision perfectly."},
    { id: 6, name: "David G.", title: "Head Ops", quote: "An outstanding partner for any business growth."},
    { id: 7, name: "Olivia M.", title: "Project Lead", quote: "Highly responsive and willing to go the extra mile."},
    { id: 8, name: "Daniel W.", title: "CTO", quote: "Their team is genuinely passionate about quality."},
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    // Added z-50 and relative to ensure it sits on top of everything
    <section className="relative z-50 w-full bg-orange-500 py-20 min-h-[600px] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-10">What People Say</h2>

        <div className="relative group">
          {/* THE ROUNDED SQUARE CARD */}
          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl transition-all duration-500 min-h-[350px] flex flex-col justify-center items-center">
            
            
            <p className="text-xl md:text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
              <p className="text-orange-600 font-medium">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 z-10">
            ←
          </button>
          <button onClick={nextSlide} className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 z-10">
            →
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-orange-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;