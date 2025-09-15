import React, { useState, useEffect } from 'react';
import './ExpansionPanel.css';

export interface ExpansionPanelProps {
  /**
   * The title displayed on the expansion panel
   */
  title?: string;
  /**
   * Additional description displayed in the panel header
   */
  description?: string;
  /**
   * Whether the panel is expanded by default
   */
  expanded?: boolean;
  /**
   * Content to be displayed when panel is expanded
   */
  children?: React.ReactNode;
  /**
   * Optional callback when expansion state changes
   */
  onChange?: (isExpanded: boolean) => void;
}

export const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  title = 'Panel Title',
  description = 'Panel Description',
  expanded = false,
  children,
  onChange
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [contentHeight, setContentHeight] = useState<number | 'auto'>(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(isExpanded ? height : 0);
    }
  }, [isExpanded, children]);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onChange?.(newExpanded);
  };

  return (
    <div className="expansion-panel">
      <div 
        className={`expansion-header ${isExpanded ? 'expanded' : ''}`}
        onClick={handleToggle}
      >
        <div className="expansion-title">
          {title}
        </div>
        {description && (
          <div className="expansion-description">
            {description}
          </div>
        )}
        <div className={`expansion-indicator ${isExpanded ? 'expanded' : ''}`}>
          ▼
        </div>
      </div>
      <div 
        className="expansion-content"
        style={{ height: isExpanded ? contentHeight : 0 }}
      >
        <div ref={contentRef} className="expansion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};