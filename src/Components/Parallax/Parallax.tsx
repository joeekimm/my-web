import React, { useRef, useEffect } from 'react';
// import './Parallax.scss';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: string; // Make speed prop optional
}

const Parallax: React.FC<ParallaxProps> = ({ children, speed = '0.5' }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrollTop * +speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef} data-speed={speed}>
      {children}
    </div>
  );
};

export default Parallax;