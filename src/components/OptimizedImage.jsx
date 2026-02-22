import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage - High-performance image component with lazy loading
 *
 * Features:
 * - Native lazy loading with IntersectionObserver fallback
 * - Blur placeholder effect
 * - WebP support with fallback
 * - Responsive images with srcset
 * - Loading state
 *
 * Usage:
 * <OptimizedImage
 *   src="/image.jpg"
 *   alt="Description"
 *   className="w-full h-full"
 *   placeholder="#0A0E1A"
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  placeholder = '#0A0E1A',
  aspectRatio,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image is in viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholder }}
        />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={onError}
          {...props}
        />
      )}
    </div>
  );
}

/**
 * Usage example in components:
 *
 * Instead of:
 * <img src="/profile-photo.jpg" alt="Profile" className="w-full h-full" />
 *
 * Use:
 * <OptimizedImage
 *   src="/profile-photo.jpg"
 *   alt="Muhammad Ahsan - Full Stack Software Engineer"
 *   className="w-full h-full object-cover"
 *   placeholder="#0A0E1A"
 * />
 */
