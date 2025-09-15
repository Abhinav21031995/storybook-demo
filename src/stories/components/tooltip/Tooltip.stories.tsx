import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../../components/Tooltip/Tooltip';
import React from 'react';

const tooltipText = 'Explore by:\n\n' +
  '● Lorem ipsum dolor sit amet.\n\n' +
  '● Lorem ipsum dolor sit amet.\n\n' +
  'Filter selections allow you to directly update the data shown.\n';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <button style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      Button
    </button>
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'before', 'after'],
      description: 'Position of the tooltip relative to its target'
    },
    label: {
      control: 'text',
      description: 'Text content of the tooltip'
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Small: Story = {
  args: {
    label: 'Tooltip text',
    position: 'right',
  },
};

export const Large: Story = {
  args: {
    label: tooltipText,
    position: 'right',
  },
};

export const PositionVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '2rem',
      padding: '2rem'
    }}>
      {(['above', 'below', 'left', 'right', 'before', 'after'] as const).map(position => (
        <Tooltip 
          key={position} 
          label={`${position} tooltip`}
          position={position}
        >
          <button style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            {position}
          </button>
        </Tooltip>
      ))}
    </div>
  )
};