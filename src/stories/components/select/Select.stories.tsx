import type { Meta, StoryObj } from '@storybook/react';
import SelectComponent from '../../../components/Select/Select';

const meta = {
  title: 'Components/Select',
  component: SelectComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['outline', 'standard'],
    },
  },
} satisfies Meta<typeof SelectComponent>;

export default meta;
type Story = StoryObj<typeof SelectComponent>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Primary: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select',
    appearance: 'outline',
  },
};

export const Standard: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select',
    appearance: 'standard',
  },
};

export const WithValue: Story = {
  args: {
    options: defaultOptions,
    value: 'option2',
    appearance: 'outline',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Choose an option...',
    appearance: 'outline',
  },
};