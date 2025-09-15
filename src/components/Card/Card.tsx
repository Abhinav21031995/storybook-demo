import React from 'react';
import './Card.css';

export interface CardProps {
  /**
   * The heading text to display at the top of the card
   */
  label?: string;
  /**
   * Whether to show the heading
   */
  showHeading?: boolean;
  /**
   * Whether to remove the drop shadow
   */
  removeDropshadow?: boolean;
  /**
   * The content to display in the card
   */
  children?: React.ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  label = '',
  showHeading = true,
  removeDropshadow = false,
  children,
  className = ''
}) => {
  return (
    <div 
      className={`card ${removeDropshadow ? 'no-shadow' : ''} ${className}`}
    >
      <div className="card-content">
        {showHeading && label && (
          <h2 className="card-heading">{label}</h2>
        )}
        {children}
      </div>
    </div>
  );
};