import React from 'react';
import './Dialog.css';

export interface DialogData {
  /**
   * The title of the dialog
   */
  title: string;
  /**
   * The message content of the dialog
   */
  message: string;
  /**
   * Text for the confirm button
   */
  confirmText?: string;
  /**
   * Text for the cancel button
   */
  cancelText?: string;
  /**
   * Type of dialog that determines its styling
   */
  type?: 'info' | 'warning' | 'error';
}

export interface DialogProps extends DialogData {
  /**
   * Whether the dialog is currently visible
   */
  isOpen: boolean;
  /**
   * Called when the dialog should be closed
   */
  onClose: () => void;
  /**
   * Called when the confirm button is clicked
   */
  onConfirm: () => void;
  /**
   * Called when the cancel button is clicked
   */
  onCancel?: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  confirmText = 'OK',
  cancelText,
  type = 'info',
  isOpen,
  onClose,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="dialog-backdrop" onClick={handleBackdropClick}>
      <div className={`dialog-container ${type}`}>
        <div className={`dialog-title ${type}`}>
          {title}
        </div>
        <div className="dialog-content">
          <p>{message}</p>
        </div>
        <div className="dialog-actions">
          {cancelText && (
            <button 
              className={`button button-secondary ${type}`}
              onClick={() => {
                onCancel?.();
                onClose();
              }}
            >
              {cancelText}
            </button>
          )}
          <button 
            className={`button button-primary ${type}`}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};