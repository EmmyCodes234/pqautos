import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style
}) => {
  // For local images, we'll use the same src but with optimization hints
  const isLocalImage = src.startsWith('/') || src.startsWith('./') || src.startsWith('../');
  
  if (isLocalImage) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        style={style}
      />
    );
  }
  
  // For external images, you could integrate with a service like Cloudinary
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      style={style}
    />
  );
};

export default OptimizedImage;