import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label = 'Checkbox',
  checked = false,
  disabled = false,
  color = 'primary',
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label 
      className={`e-checkbox ${color === 'primary' ? 'e-checkbox--primary' : 'e-checkbox--secondary'}`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="e-checkbox__input"
      />
      <span className="e-checkbox__checkmark"></span>
      <span className="e-checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;