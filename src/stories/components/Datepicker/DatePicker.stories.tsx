import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../../../components/DatePicker/DatePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The current date value (dd/mm/yyyy)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Interactive wrapper for stories
const InteractiveDatePicker = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ width: '300px' }}>
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    placeholder: 'dd/mm/yyyy',
  },
};

export const WithInitialValue: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    value: '01/01/2023',
    placeholder: 'dd/mm/yyyy',
  },
};

export const Required: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    required: true,
    placeholder: 'dd/mm/yyyy',
    error: 'Please select a date',
  },
};

export const WithError: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    value: '35/13/2023', // Invalid date
    placeholder: 'dd/mm/yyyy',
    error: 'Invalid date format',
  },
};