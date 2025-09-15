import React from 'react';
import './progress-spinner.css';

export type SpinnerColor = 'primary' | 'accent' | 'warn';
export type SpinnerMode = 'determinate' | 'indeterminate';

export interface ProgressSpinnerProps {
  /**
   * The color theme of the spinner
   */
  color?: SpinnerColor;
  /**
   * The mode of operation
   */
  mode?: SpinnerMode;
  /**
   * The value for determinate mode (0-100)
   */
  value?: number;
  /**
   * Size of the spinner in pixels
   */
  size?: number;
  /**
   * Stroke width of the spinner in pixels
   */
  strokeWidth?: number;
}

export const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({
  color = 'primary',
  mode = 'indeterminate',
  value = 50,
  size = 50,
  strokeWidth = 4,
}) => {
  // Ensure value is between 0 and 100
  const normalizedValue = Math.min(100, Math.max(0, value));
  
  // Calculate the circumference and offset
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = mode === 'determinate' 
    ? circumference - (normalizedValue / 100) * circumference 
    : 0;

  return (
    <div 
      className={`progress-spinner-container progress-spinner-${color}`}
      style={{ width: size, height: size }}
    >
      <svg
        className={`progress-spinner ${mode === 'indeterminate' ? 'spinner-animation' : ''}`}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="progress-spinner-circle-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-spinner-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
    </div>
  );
};