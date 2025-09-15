import React from 'react';
import './Loader.css';

export interface LoaderProps {
  /**
   * Custom class name for the loader
   */
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className = '' }) => {
  return (
    <div
      className={`e-loading-spinner ${className}`}
      aria-atomic="true"
      aria-live="assertive"
      role="status"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        viewBox="0 0 78 60"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Loading page</title>
        <path
          className="e-slice-rt"
          d="M32.1,32.9l31.4-11.4c0,0-2.5-6.9-8.5-12.6C49,3.2,42.5,1,37.9,0L32.1,32.9z"
        />
        <path
          className="e-slice-rc"
          d="M38.7,33.7h39.2c0,0,0.1-6.5-2.4-13.4L38.7,33.7z"
        />
        <path
          className="e-slice-rb"
          d="M31.5,36.6h23.6c0,0,0,10.1-8.9,17.6c0,0-7.4,6.9-18.7,5.6L31.5,36.6z"
        />
        <path
          className="e-slice-lt"
          d="M29.2,32.4L12.7,18.5c0,0,3.8-4.3,9.4-6.2c5.6-1.9,10.3-1.2,10.9-1.2L29.2,32.4z"
        />
        <path
          className="e-slice-lc"
          d="M27.3,34.6L1.4,44c0,0-2.3-6.7-1-14c1.3-7.3,4.9-11.8,5.8-13.1L27.3,34.6z"
        />
        <path
          className="e-slice-lb"
          d="M28.3,37.4l-3,16.7c0,0-8.8-1.6-13-10.9L28.3,37.4z"
        />
      </svg>
    </div>
  );
};