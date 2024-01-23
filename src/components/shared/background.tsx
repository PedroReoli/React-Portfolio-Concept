// Background.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedBackground = styled.div<{ animate: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ff4e50, #f9d423);
  z-index: -1;
  animation: ${({ animate }) =>
    animate ? `${gradientAnimation} 10s infinite linear` : 'none'};
`;


interface BackgroundProps {
    onMouseOver: () => void;
    onMouseOut: () => void;
    animate: boolean;
  }
  
  const Background: React.FC<BackgroundProps> = ({
    onMouseOver,
    onMouseOut,
    animate,
  }) => {
    return (
      <AnimatedBackground
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        animate={animate}
      />
    );
  };
  

export default Background;
