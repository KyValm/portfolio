import { useEffect } from 'react';

const useIntersectionObserver = (
    ref,
    callback,
    outOfViewportCallback = () => {},
    threshold = 0.5
  ) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              callback(entry.target);
            } else {
              outOfViewportCallback(entry.target);
            }
          });
        },
        {
          threshold,
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, callback, outOfViewportCallback, threshold]);
  };
  
  export default useIntersectionObserver;