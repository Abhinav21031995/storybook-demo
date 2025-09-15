import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A **Card** is a container that holds information and actions related to a single concept or object.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The heading text to display at the top of the card'
    },
    showHeading: {
      control: 'boolean',
      description: 'Whether to show the heading'
    },
    removeDropshadow: {
      control: 'boolean',
      description: 'Whether to remove the drop shadow'
    },
    children: {
      control: 'text',
      description: 'The content to display in the card'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    label: 'Card Heading',
    showHeading: true,
    removeDropshadow: false,
    children: (
      <div style={{ padding: '16px 0' }}>
        <p>This is some sample content inside the card.</p>
        <p>You can add any elements here.</p>
      </div>
    )
  }
};

export const NoHeading: Story = {
  args: {
    showHeading: false,
    children: (
      <div style={{ padding: '8px 0' }}>
        <p>A card without a heading.</p>
      </div>
    )
  }
};

export const NoShadow: Story = {
  args: {
    label: 'Card Without Shadow',
    removeDropshadow: true,
    children: (
      <div style={{ padding: '16px 0' }}>
        <p>This card has no drop shadow.</p>
      </div>
    )
  }
};

export const ComplexContent: Story = {
  args: {
    label: 'Complex Card',
    children: (
      <div style={{ padding: '16px 0' }}>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Features</h3>
          <ul style={{ margin: 0 }}>
            <li>Customizable heading</li>
            <li>Optional drop shadow</li>
            <li>Flexible content area</li>
          </ul>
        </div>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '4px' 
        }}>
          <p style={{ margin: 0 }}>
            Example of nested content with custom styling
          </p>
        </div>
      </div>
    )
  }
};