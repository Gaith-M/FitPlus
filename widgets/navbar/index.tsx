import { useState, useEffect } from 'react';
import { LargeViewNav, SmallViewNav } from './views';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const detectMobile = () => setIsMobile(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', detectMobile);

    return () => window.removeEventListener('DOMContentLoaded', detectMobile);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', detectMobile);
    console.log(isMobile);
  }, [isMobile]);

  return isMobile ? <SmallViewNav /> : <LargeViewNav />;
};

export default NavBar;
