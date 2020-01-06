import { useEffect } from 'react';

export const useWindowEvent = (event, handler, deps) => {
  useEffect(() => {
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, [event, handler, ...deps]);
};

export const isProd = process.env.NODE_ENV === 'production';
