import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Input value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: '',
    placeholder: 'Enter a value',
    label: 'Input field',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Initial Value',
    placeholder: 'Enter a value',
    label: 'Input with value',
  },
};

export const WithoutLabel: Story = {
  args: {
    value: '',
    placeholder: 'No label input',
    label: '',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    value: '',
    placeholder: 'Type something here...',
    label: 'Custom placeholder',
  },
};