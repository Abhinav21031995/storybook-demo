import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    label: {
      control: 'text',
      description: 'Button contents'
    },
    iconClass: {
      control: 'text',
      description: 'Optional icon class (Font Awesome or similar)'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    label: 'Large Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    label: 'Small Button',
    size: 'small',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    label: 'With Icon',
    size: 'medium',
    iconClass: 'fas fa-arrow-right',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    size: 'medium',
    disabled: true,
  },
};