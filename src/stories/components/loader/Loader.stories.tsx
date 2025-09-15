import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../../components/Loader/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A loading spinner component that provides visual feedback during loading states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default loader showing an animated spinner.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-loader',
  },
  parameters: {
    docs: {
      description: {
        story: 'A loader with a custom CSS class applied.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ '--primary-color': '#ed6c02' } as React.CSSProperties}>
        <Story />
      </div>
    ),
  ],
};