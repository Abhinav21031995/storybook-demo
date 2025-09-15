import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: { action: 'changed' }
  },

};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Primary Checkbox',
    checked: true,
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Checkbox',
    checked: true,
    color: 'secondary',
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: false,
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    checked: false,
    disabled: true,
    color: 'primary',
  },
};