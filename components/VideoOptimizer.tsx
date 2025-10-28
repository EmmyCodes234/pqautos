import React from 'react';

interface OptimizedVideoProps {
  src: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({ 
  src, 
  type = 'video/mp4',
  className = '',
  style,
  children
}) => {
  // For local videos, we'll use the same src but with optimization hints
  const isLocalVideo = src.startsWith('/') || src.startsWith('./') || src.startsWith('../');
  
  if (isLocalVideo) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className={className}
        style={style}
        preload="metadata"
      >
        <source src={src} type={type} />
        {children}
      </video>
    );
  }
  
  // For external videos, you could integrate with a service
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={style}
      preload="metadata"
    >
      <source src={src} type={type} />
      {children}
    </video>
  );
};

export default OptimizedVideo;