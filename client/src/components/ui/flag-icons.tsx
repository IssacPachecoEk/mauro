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
