import React, { useState } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  /**
   * The current value of the datepicker (dd/mm/yyyy format)
   */
  value?: string;
  /**
   * Placeholder text when no date is selected
   */
  placeholder?: string;
  /**
   * Called when the date changes
   */
  onChange?: (value: string) => void;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Error message to display when validation fails
   */
  error?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value = '',
  placeholder = 'dd/mm/yyyy',
  onChange,
  required = false,
  error
}) => {
  const [touched, setTouched] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Format date as dd/mm/yyyy
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Parse date from dd/mm/yyyy
  const parseDate = (dateStr: string): Date | null => {
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    if (
      date.getDate() === day &&
      date.getMonth() === month &&
      date.getFullYear() === year
    ) {
      return date;
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
    if (touched) {
      validateDate(newValue);
    }
  };

  const validateDate = (dateStr: string) => {
    if (required && !dateStr) {
      setInputError('Date is required');
      return false;
    }
    if (dateStr && !parseDate(dateStr)) {
      setInputError('Invalid date format (dd/mm/yyyy)');
      return false;
    }
    setInputError(null);
    return true;
  };

  const handleBlur = () => {
    setTouched(true);
    validateDate(value);
  };

  const handleDateSelect = (date: Date) => {
    if (onChange) {
      onChange(formatDate(date));
    }
    setInputError(null);
    setShowCalendar(false);
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }

    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = value === formatDate(date);
      days.push(
        <td key={day}>
          <button
            type="button"
            className={`calendar-day ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            {day}
          </button>
        </td>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Split calendar days into weeks
  const calendarDays = generateCalendarDays();
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div className="datepicker-container">
      <div className="datepicker-input-container">
        <input
          type="text"
          className={`datepicker-input ${(error || inputError) ? 'error' : ''}`}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
        />
        <button 
          className="calendar-toggle"
          onClick={() => setShowCalendar(!showCalendar)}
          type="button"
          aria-label="Toggle calendar"
        >
          📅
        </button>
      </div>
      {(error || inputError) && (
        <div className="datepicker-error">
          {error || inputError}
        </div>
      )}
      {showCalendar && (
        <div className="calendar-dropdown">
          <div className="calendar-header">
            <button type="button" onClick={prevMonth}>&lt;</button>
            <span>
              {currentMonth.toLocaleDateString('default', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
            <button type="button" onClick={nextMonth}>&gt;</button>
          </div>
          <table className="calendar">
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, i) => (
                <tr key={i}>{week}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};