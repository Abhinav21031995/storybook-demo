import type { Meta, StoryObj } from '@storybook/react';
import { ProgressSpinner } from '../../../components/progress-spinner/progress-spinner';

const meta: Meta<typeof ProgressSpinner> = {
  title: 'Components/Progress Spinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn'],
      description: 'Theme color of the spinner'
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Mode of operation'
    },
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Progress value (0-100) for determinate mode'
    },
    size: {
      control: { type: 'number', min: 20, max: 200 },
      description: 'Size of the spinner in pixels'
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Stroke width of the spinner in pixels'
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular progress indicator that shows a determinate or indeterminate progress state.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProgressSpinner>;

export const Primary: Story = {
  args: {
    color: 'primary',
    mode: 'indeterminate',
    size: 50,
    strokeWidth: 4
  }
};

export const Accent: Story = {
  args: {
    color: 'accent',
    mode: 'indeterminate',
    size: 50,
    strokeWidth: 4
  }
};

export const Warning: Story = {
  args: {
    color: 'warn',
    mode: 'indeterminate',
    size: 50,
    strokeWidth: 4
  }
};

export const Determinate: Story = {
  args: {
    color: 'primary',
    mode: 'determinate',
    value: 75,
    size: 50,
    strokeWidth: 4
  }
};

export const Large: Story = {
  args: {
    color: 'primary',
    mode: 'indeterminate',
    size: 100,
    strokeWidth: 8
  }
};