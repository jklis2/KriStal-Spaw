import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  company: string;
  location: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  location,
  testimonial,
  rating,
  imageSrc,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-900/50 shadow-black/20">
      <div className="grid md:grid-cols-5">
        {/* Image column */}
        <div className="md:col-span-2 relative h-64 md:h-auto">
          <Image
            src={imageSrc}
            alt={`Testimonial from ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="bg-weldingRed text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              OPINIA KLIENTA
            </div>
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-gray-300 text-sm">{company}, {location}</p>
          </div>
        </div>
        
        {/* Testimonial content */}
        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <svg className="w-12 h-12 text-weldingRed/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <blockquote className="relative">
            <p className="text-xl font-medium mb-8 text-white">
              {testimonial}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= rating ? "text-yellow-500" : "text-gray-300"}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">
                {rating}.0 / 5.0
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TestimonialCard);
