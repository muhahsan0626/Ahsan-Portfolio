import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics Component
 *
 * Usage:
 * 1. Get your GA4 Measurement ID from https://analytics.google.com
 * 2. Replace 'G-XXXXXXXXXX' below with your actual ID
 * 3. Import and add <Analytics /> to your Layout.jsx
 *
 * Example:
 * import Analytics from './components/Analytics';
 *
 * function Layout({ children }) {
 *   return (
 *     <>
 *       <Analytics />
 *       {children}
 *     </>
 *   );
 * }
 */

const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID
const ENABLE_ANALYTICS = false; // Set to true when you have your Measurement ID

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!ENABLE_ANALYTICS || typeof window === 'undefined') return;

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID);

    return () => {
      // Cleanup if needed
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (!ENABLE_ANALYTICS || !window.gtag) return;

    window.gtag('config', MEASUREMENT_ID, {
      page_path: location.pathname + location.search + location.hash,
    });
  }, [location]);

  return null;
}

/**
 * Track custom events
 *
 * Usage:
 * import { trackEvent } from './components/Analytics';
 *
 * trackEvent('button_click', {
 *   category: 'engagement',
 *   label: 'download_resume'
 * });
 */
export function trackEvent(eventName, eventParams = {}) {
  if (!ENABLE_ANALYTICS || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);
}
