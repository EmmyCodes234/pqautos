import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src="/pqlo.png"
        alt="PQ Autos Logo"
        className={className}
    />
);

export default Logo;
