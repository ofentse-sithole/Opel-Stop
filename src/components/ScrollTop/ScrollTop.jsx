import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    const timeoutId = setTimeout(scrollToTop, 100);

    // Clean up the timeout when component unmounts
    return () => clearTimeout(timeoutId);
  }, [location]); // Dependencies array should include location

  return null; // No UI, just scrolls to top
};

export default ScrollToTop;