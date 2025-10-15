import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function ImageWithFallback({ src, alt, className, style, ...rest }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded ${className ?? ''}`}
        style={{ ...style, minHeight: '100px' }}
        role="img"
        aria-label={alt ?? 'Image failed to load'}
      >
        <img
          src={ERROR_IMG_SRC}
          alt={alt ?? 'Error loading image'}
          {...rest}
          data-original-url={src}
          className="max-w-full max-h-full"
        />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />;
}
