
import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 text-8xl text-blue-100 -z-1 opacity-50">
            <i className="fas fa-quote-right"></i>
        </div>
        <div className="text-center transition-opacity duration-500 ease-in-out">
            <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200" />
            <p className="text-slate-600 text-lg italic mb-4">"{currentTestimonial.quote}"</p>
            <h4 className="font-bold text-slate-800 text-xl">{currentTestimonial.name}</h4>
            <p className="text-slate-500">{currentTestimonial.role}</p>
        </div>
        <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors">
            &#10094;
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors">
            &#10095;
        </button>
    </div>
  );
};

export default TestimonialSlider;
