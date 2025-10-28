import React, { useEffect, useRef } from 'react';
import './SimpleLogoLoop.css';

interface SimpleLogoLoopProps {
  logos: Array<{ src: string; alt: string }>;
  speed?: number;
  logoHeight?: number;
  gap?: number;
}

const SimpleLogoLoop: React.FC<SimpleLogoLoopProps> = ({
  logos,
  speed = 1,
  logoHeight = 60,
  gap = 60,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Clone the logos array to create a seamless loop
    const logosArray = [...logos, ...logos];
    
    // Clear existing content
    content.innerHTML = '';
    
    // Add all logos to the content
    logosArray.forEach(logo => {
      const img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.alt;
      img.className = 'simple-logoloop__logo';
      img.style.height = `${logoHeight}px`;
      img.style.marginRight = `${gap}px`;
      content.appendChild(img);
    });

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      if (!container || !content) return;
      
      position -= speed;
      
      // Reset position when we've moved one set of logos
      if (Math.abs(position) >= content.scrollWidth / 2) {
        position = 0;
      }
      
      content.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [logos, speed, logoHeight, gap]);

  return (
    <div 
      ref={containerRef} 
      className="simple-logoloop__container"
    >
      <div 
        ref={contentRef} 
        className="simple-logoloop__content"
      />
    </div>
  );
};

export default SimpleLogoLoop;