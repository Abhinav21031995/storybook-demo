import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from '../../../components/Tabs/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  render: () => (
    <Tabs>
      <Tab label="Recent searches">
        <p>Content 1</p>
      </Tab>
      <Tab label="Saved searches">
        <p>Content 2</p>
      </Tab>
      <Tab label="Disabled tab" disabled>
        <p>Content 3</p>
      </Tab>
    </Tabs>
  )
};

export const Stretched: Story = {
  render: () => (
    <Tabs stretch>
      <Tab label="Recent searches">
        <p>Content 1</p>
      </Tab>
      <Tab label="Saved searches">
        <p>Content 2</p>
      </Tab>
      <Tab label="Disabled tab" disabled>
        <p>Content 3</p>
      </Tab>
    </Tabs>
  )
};

export const WithDefaultTab: Story = {
  render: () => (
    <Tabs defaultTab={1}>
      <Tab label="Recent searches">
        <p>Content 1</p>
      </Tab>
      <Tab label="Saved searches">
        <p>Content 2</p>
      </Tab>
      <Tab label="Disabled tab" disabled>
        <p>Content 3</p>
      </Tab>
    </Tabs>
  )
};