import React from 'react';
import './Chipset.css';

export interface ChipItem {
  id: number;
  label: string;
  removable?: boolean;
  selected?: boolean;
}

export interface ChipsetProps {
  chips: ChipItem[];
  selectable?: boolean;
  removable?: boolean;
  onRemove?: (chip: ChipItem) => void;
  onToggle?: (chip: ChipItem) => void;
}

export const Chipset: React.FC<ChipsetProps> = ({
  chips,
  selectable = true,
  removable = true,
  onRemove,
  onToggle,
}) => {
  const handleRemove = (chip: ChipItem) => {
    if (removable && chip.removable && onRemove) {
      onRemove(chip);
    }
  };

  const handleToggle = (chip: ChipItem) => {
    if (selectable && onToggle) {
      onToggle(chip);
    }
  };

  return (
    <div className="chipset-container">
      {chips.map((chip) => (
        <span
          key={chip.id}
          className={`chip${chip.selected ? ' selected' : ''}${chip.removable ? ' removable' : ''}`}
          style={{ backgroundColor: chip.selected ? '#e0e0e0' : '#f5f5f5' }}
          onClick={() => handleToggle(chip)}
        >
          {chip.label}
          {removable && chip.removable && (
            <button
              className="chip-remove"
              aria-label="Remove chip"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(chip);
              }}
            >
              ×
            </button>
          )}
        </span>
      ))}
    </div>
  );
};