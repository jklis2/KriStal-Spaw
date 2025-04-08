import React, { ReactNode } from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  href, 
  children, 
  icon,
  className = ''
}) => {
  return (
    <Link 
      href={href} 
      className={`inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 rounded-lg font-medium hover:bg-ctaOrange transition-all duration-300 shadow-lg shadow-weldingRed/20 hover:shadow-ctaOrange/30 ${className}`}
    >
      <span>{children}</span>
      {icon && icon}
    </Link>
  );
};

export default CTAButton;
