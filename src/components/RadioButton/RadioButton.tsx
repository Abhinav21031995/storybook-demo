import React from 'react';
import './RadioButton.css';

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioButtonProps {
  options: RadioOption[];
  label?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  name: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  label,
  selectedValue,
  onChange,
  variant = 'primary',
  disabled = false,
  name,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`e-radio-group ${disabled ? 'e-radio-group--disabled' : ''}`}>
      {label && <label className="e-radio-group__label">{label}</label>}
      <div className="e-radio-group__options">
        {options.map((option) => (
          <label
            key={option.value}
            className={`e-radio ${variant === 'primary' ? 'e-radio--primary' : 'e-radio--secondary'}`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              disabled={disabled}
              className="e-radio__input"
            />
            <span className="e-radio__button"></span>
            <span className="e-radio__label">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;