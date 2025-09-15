import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../../../components/RadioButton/RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

export const Primary: Story = {
  args: {
    label: 'Radio Group',
    options: defaultOptions,
    selectedValue: 'option1',
    variant: 'primary',
    name: 'primary-radio-group'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Radio Group',
    options: defaultOptions,
    selectedValue: 'option1',
    variant: 'secondary',
    name: 'secondary-radio-group'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio Group',
    options: defaultOptions,
    selectedValue: 'option1',
    disabled: true,
    name: 'disabled-radio-group'
  }
};

export const NoLabel: Story = {
  args: {
    options: defaultOptions,
    selectedValue: 'option1',
    name: 'no-label-radio-group'
  }
};