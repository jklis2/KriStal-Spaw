import React, { ComponentType } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  index: number;
}

const ICON_SVGS = [
  <svg key="0" className="w-8 h-8 text-weldingRed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>,
  <svg key="1" className="w-8 h-8 text-weldingRed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
  </svg>,
  <svg key="2" className="w-8 h-8 text-weldingRed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7519 11.1679L11.5547 9.03647C11.0921 8.72159 10.4336 9.04541 10.4336 9.60533V13.8681C10.4336 14.428 11.0921 14.7518 11.5547 14.437L14.7519 12.3055C15.1895 12.0075 15.1895 11.4659 14.7519 11.1679Z" fill="currentColor" />
    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
  </svg>,
  <svg key="3" className="w-8 h-8 text-weldingRed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8H19M5 12H19M5 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="4" className="w-8 h-8 text-weldingRed" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>,
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
  index,
}) => {
  const iconContent = ICON_SVGS[index % 5];

  return (
    <div 
      className="rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg bg-white hover:bg-gray-50 shadow-gray-200/80"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 bg-weldingRed/10 group-hover:bg-weldingRed/20">
          <Icon 
            size={32} 
            className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
          />
        </div>
        <div className="relative">
          <div className="w-16 h-16 bg-industrialGray rounded-full overflow-hidden relative group-hover:shadow-lg group-hover:shadow-weldingRed/30 transition-all duration-500">
            {/* Animowany efekt iskier spawalniczych */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-full">
                <div className={`absolute w-full h-full bg-gradient-to-br from-weldingRed via-ctaOrange to-yellow-500 opacity-20 ${index % 2 === 0 ? 'animate-spin-slow' : 'animate-pulse'}`} style={{borderRadius: '40%'}}></div>
              </div>
              
              {/* Metalowa tarcza z efektem 3D */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 opacity-30 rounded-full"></div>
              
              {/* Symbol spawalniczy w środku */}
              <div className="z-10 flex items-center justify-center w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                {iconContent}
              </div>
            </div>
            
            {/* Efekt iskier na krawędziach */}
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow delay-300"></div>
            <div className="absolute top-1/4 right-0 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping-slow delay-700"></div>
          </div>
          
          {/* Efekt blasku za tarczą */}
          <div className="absolute inset-0 bg-weldingRed/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>
      
      <h3 className="text-2xl font-oswald font-bold mb-3 group-hover:text-weldingRed transition-colors duration-300 text-gray-900">
        {title}
      </h3>
      
      <p className="font-roboto leading-relaxed transition-colors duration-300 text-gray-600 group-hover:text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default React.memo(FeatureCard);
