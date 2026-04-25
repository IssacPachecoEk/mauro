import React from 'react';

interface FlagIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const USFlag: React.FC<FlagIconProps> = ({ 
  className = "", 
  width = 24, 
  height = 16 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 16" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="16" fill="#B22234"/>
    <rect y="1" width="24" height="1" fill="white"/>
    <rect y="3" width="24" height="1" fill="white"/>
    <rect y="5" width="24" height="1" fill="white"/>
    <rect y="7" width="24" height="1" fill="white"/>
    <rect y="9" width="24" height="1" fill="white"/>
    <rect y="11" width="24" height="1" fill="white"/>
    <rect y="13" width="24" height="1" fill="white"/>
    <rect y="15" width="24" height="1" fill="white"/>
    <rect width="10" height="8" fill="#3C3B6E"/>
    <g fill="white">
      <circle cx="1.5" cy="1.5" r="0.3"/>
      <circle cx="3" cy="1.5" r="0.3"/>
      <circle cx="4.5" cy="1.5" r="0.3"/>
      <circle cx="6" cy="1.5" r="0.3"/>
      <circle cx="7.5" cy="1.5" r="0.3"/>
      <circle cx="9" cy="1.5" r="0.3"/>
      
      <circle cx="2.25" cy="2.5" r="0.3"/>
      <circle cx="3.75" cy="2.5" r="0.3"/>
      <circle cx="5.25" cy="2.5" r="0.3"/>
      <circle cx="6.75" cy="2.5" r="0.3"/>
      <circle cx="8.25" cy="2.5" r="0.3"/>
      
      <circle cx="1.5" cy="3.5" r="0.3"/>
      <circle cx="3" cy="3.5" r="0.3"/>
      <circle cx="4.5" cy="3.5" r="0.3"/>
      <circle cx="6" cy="3.5" r="0.3"/>
      <circle cx="7.5" cy="3.5" r="0.3"/>
      <circle cx="9" cy="3.5" r="0.3"/>
      
      <circle cx="2.25" cy="4.5" r="0.3"/>
      <circle cx="3.75" cy="4.5" r="0.3"/>
      <circle cx="5.25" cy="4.5" r="0.3"/>
      <circle cx="6.75" cy="4.5" r="0.3"/>
      <circle cx="8.25" cy="4.5" r="0.3"/>
      
      <circle cx="1.5" cy="5.5" r="0.3"/>
      <circle cx="3" cy="5.5" r="0.3"/>
      <circle cx="4.5" cy="5.5" r="0.3"/>
      <circle cx="6" cy="5.5" r="0.3"/>
      <circle cx="7.5" cy="5.5" r="0.3"/>
      <circle cx="9" cy="5.5" r="0.3"/>
      
      <circle cx="2.25" cy="6.5" r="0.3"/>
      <circle cx="3.75" cy="6.5" r="0.3"/>
      <circle cx="5.25" cy="6.5" r="0.3"/>
      <circle cx="6.75" cy="6.5" r="0.3"/>
      <circle cx="8.25" cy="6.5" r="0.3"/>
    </g>
  </svg>
);

export const MXFlag: React.FC<FlagIconProps> = ({ 
  className = "", 
  width = 24, 
  height = 16 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 16" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="16" fill="#006847"/>
    <rect x="8" width="8" height="16" fill="white"/>
    <rect x="16" width="8" height="16" fill="#CE1126"/>
    
    {/* Escudo simplificado en el centro */}
    <g transform="translate(12, 8)">
      {/* Águila simplificada */}
      <circle cx="0" cy="-1" r="1.5" fill="#8B4513" opacity="0.8"/>
      <path d="M-1.2,-0.5 Q0,-2 1.2,-0.5 Q0,0.5 -1.2,-0.5" fill="#654321"/>
      {/* Cactus simplificado */}
      <rect x="-0.3" y="0" width="0.6" height="2" fill="#228B22"/>
      <circle cx="-0.8" cy="0.5" r="0.3" fill="#228B22"/>
      <circle cx="0.8" cy="0.5" r="0.3" fill="#228B22"/>
    </g>
  </svg>
);

export const PTFlag: React.FC<FlagIconProps> = ({ 
  className = "", 
  width = 24, 
  height = 16 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 16" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="9.6" height="16" fill="#046A38"/>
    <rect x="9.6" width="14.4" height="16" fill="#DA020E"/>
    
    {/* Escudo simplificado */}
    <g transform="translate(9.6, 8)">
      <circle cx="0" cy="0" r="2" fill="#FFD700" opacity="0.8"/>
      <circle cx="0" cy="0" r="1" fill="#003399" opacity="0.6"/>
    </g>
  </svg>
);

export const FRFlag: React.FC<FlagIconProps> = ({ 
  className = "", 
  width = 24, 
  height = 16 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 16" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="16" fill="#0055A4"/>
    <rect x="8" width="8" height="16" fill="white"/>
    <rect x="16" width="8" height="16" fill="#EF4135"/>
  </svg>
);

export const CNFlag: React.FC<FlagIconProps> = ({ 
  className = "", 
  width = 24, 
  height = 16 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 16" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="16" fill="#DE2910"/>
    
    {/* Estrellas simplificadas */}
    <g fill="#FFDE00">
      {/* Estrella grande */}
      <polygon points="4,3 4.8,4.5 6.5,4.5 5.2,5.8 5.8,7.5 4,6.5 2.2,7.5 2.8,5.8 1.5,4.5 3.2,4.5" transform="scale(0.8)"/>
      {/* Estrellas pequeñas */}
      <polygon points="8,2 8.3,2.7 9,2.7 8.5,3.2 8.7,3.9 8,3.6 7.3,3.9 7.5,3.2 7,2.7 7.7,2.7" transform="scale(0.5)"/>
      <polygon points="9,4 9.3,4.7 10,4.7 9.5,5.2 9.7,5.9 9,5.6 8.3,5.9 8.5,5.2 8,4.7 8.7,4.7" transform="scale(0.5)"/>
      <polygon points="9,6.5 9.3,7.2 10,7.2 9.5,7.7 9.7,8.4 9,8.1 8.3,8.4 8.5,7.7 8,7.2 8.7,7.2" transform="scale(0.5)"/>
      <polygon points="8,8.5 8.3,9.2 9,9.2 8.5,9.7 8.7,10.4 8,10.1 7.3,10.4 7.5,9.7 7,9.2 7.7,9.2" transform="scale(0.5)"/>
    </g>
  </svg>
);
