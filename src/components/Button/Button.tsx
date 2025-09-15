import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  /**
   * Button label text
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional icon class (for custom icons)
   */
  iconClass?: string;
};

// export function Button({ label, onClick, disabled = false, variant = 'primary' }: ButtonProps) { // example without React.FC - excludes 'children' prop
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  iconClass = ''
}) => {
  return (
    <button
      className={`${styles['e-button']} ${styles[`e-${variant}`]} ${styles[`e-${size}`]}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
      {iconClass && <i className={iconClass} aria-hidden="true"></i>}
    </button>
  );
};

export default Button;