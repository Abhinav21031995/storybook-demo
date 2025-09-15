import type { Meta, StoryObj } from '@storybook/react';
import { ExpansionPanel } from '../../../components/ExpansionPanel/ExpansionPanel';

const meta: Meta<typeof ExpansionPanel> = {
  title: 'Components/ExpansionPanel',
  component: ExpansionPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The **ExpansionPanel** is used to toggle the visibility of content sections. It supports configurable title, description, and expansion state.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed on the expansion panel'
    },
    description: {
      control: 'text',
      description: 'Additional description displayed in the panel header'
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the panel is expanded by default'
    },
    children: {
      control: 'text',
      description: 'Content to be displayed when panel is expanded'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ExpansionPanel>;

export const Default: Story = {
  args: {
    title: 'General Information',
    description: 'Click to expand',
    expanded: false,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    )
  }
};

export const Expanded: Story = {
  args: {
    title: 'Expanded Panel',
    description: 'This panel starts expanded',
    expanded: true,
    children: (
      <div>
        <p>
          This panel starts in an expanded state. You can collapse it by clicking 
          the header.
        </p>
        <ul>
          <li>Supports rich content</li>
          <li>Smooth animations</li>
          <li>Configurable state</li>
        </ul>
      </div>
    )
  }
};

export const NoDescription: Story = {
  args: {
    title: 'Simple Panel',
    expanded: false,
    children: (
      <p>
        A simpler panel without a description line.
      </p>
    )
  }
};