import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../../../components/Dialog/Dialog';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// DialogWrapper for interactive stories
const DialogWrapper = ({ 
  title, 
  message, 
  confirmText, 
  cancelText, 
  type 
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Open Dialog
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Confirmed');
          setIsOpen(false);
        }}
        onCancel={() => {
          console.log('Cancelled');
          setIsOpen(false);
        }}
        title={title}
        message={message}
        confirmText={confirmText}
        cancelText={cancelText}
        type={type}
      />
    </>
  );
};

export const Primary: Story = {
  render: () => (
    <DialogWrapper
      title="Confirmation"
      message="Are you sure you want to proceed?"
      confirmText="Confirm"
      cancelText="Cancel"
      type="info"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <DialogWrapper
      title="Warning"
      message="This action cannot be undone. Are you sure?"
      confirmText="Yes, proceed"
      cancelText="No, go back"
      type="warning"
    />
  ),
};

export const Error: Story = {
  render: () => (
    <DialogWrapper
      title="Error"
      message="An error occurred while processing your request."
      confirmText="OK"
      type="error"
    />
  ),
};