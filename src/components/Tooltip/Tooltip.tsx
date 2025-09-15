import React, { useState } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'above' | 'below' | 'left' | 'right' | 'before' | 'after';

export interface TooltipProps {
  /**
   * The text content to display in the tooltip
   */
  label: string;
  /**
   * The position of the tooltip relative to its target
   */
  position?: TooltipPosition;
  /**
   * The content that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * Custom class for styling
   */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  position = 'right',
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div 
      className={`tooltip-container ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={`tooltip-content tooltip-${position}`}>
          {label.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < label.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};