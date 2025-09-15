import React, { useState } from 'react';
import './Tabs.css';

export interface TabProps {
  label: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
  stretch?: boolean;
  onChange?: (index: number) => void;
  defaultTab?: number;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  stretch = false,
  onChange,
  defaultTab = 0
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index: number) => {
    if (!children[index].props.disabled) {
      setActiveTab(index);
      onChange?.(index);
    }
  };

  return (
    <div className={`tabs-container ${stretch ? 'stretch' : ''}`}>
      <div className="tab-headers">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          return (
            <button
              key={index}
              className={`tab-header ${index === activeTab ? 'active' : ''} ${child.props.disabled ? 'disabled' : ''}`}
              onClick={() => handleTabClick(index)}
              disabled={child.props.disabled}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>
      <div className="tab-body">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          return (
            <div className={`tab-panel ${index === activeTab ? 'active' : ''}`}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};