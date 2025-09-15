import React from 'react';
import './Input.css';

export interface InputProps {
  /**
   * The value of the input field
   */
  value?: string;
  /**
   * Placeholder text to show when input is empty
   */
  placeholder?: string;
  /**
   * Label text for the input field
   */
  label?: string;
  /**
   * Optional callback for value changes
   */
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  value = '',
  placeholder = 'Enter text',
  label = 'Input Label',
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className="input-field-container">
        <input
          type="text"
          className="input-field"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};