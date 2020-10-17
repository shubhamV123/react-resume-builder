import { useState, useEffect, useDebugValue } from 'react';

const useResponsiveMedia = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 600px)').matches,
  );
  const mediaQueryList = window.matchMedia('(max-width: 600px)');

  useEffect(() => {
    const checkScreenResolution = (e) => {
      setIsMobile(e.matches);
    };
    try {
      mediaQueryList.addEventListener('change', checkScreenResolution);
    } catch (e) {
      //Safari fix
      mediaQueryList.addListener(checkScreenResolution);
    }
    return () => {
      mediaQueryList.removeEventListener &&
        mediaQueryList.removeEventListener('change', checkScreenResolution);
      mediaQueryList.removeListener &&
        mediaQueryList.removeListener(checkScreenResolution);
    };
  }, []);
  return isMobile;
};

export default useResponsiveMedia;
