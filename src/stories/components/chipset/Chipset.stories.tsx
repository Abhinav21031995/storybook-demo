import type { Meta, StoryObj } from '@storybook/react';
import { Chipset, ChipItem } from '../../../components/Chipset/Chipset';

const meta: Meta<typeof Chipset> = {
  title: 'Components/Chipset',
  component: Chipset,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A **Chipset** component displays a collection of chips that can be selectable and/or removable.'
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof Chipset>;

const defaultChips: ChipItem[] = [
  { id: 1, label: 'Chip One', removable: true, selected: false },
  { id: 2, label: 'Chip Two', removable: true, selected: true },
  { id: 3, label: 'Chip Three', removable: false, selected: false },
];

export const Primary: Story = {
  args: {
    chips: defaultChips,
    selectable: true,
    removable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default chipset configuration with both selectable and removable chips.',
      },
    },
  },
};

export const NonSelectable: Story = {
  args: {
    chips: defaultChips.map(chip => ({ ...chip, selected: false })),
    selectable: false,
    removable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chipset where chips cannot be selected but can be removed.',
      },
    },
  },
};

export const NonRemovable: Story = {
  args: {
    chips: [
      { id: 1, label: 'Fixed Chip One', removable: false },
      { id: 2, label: 'Fixed Chip Two', removable: false },
      { id: 3, label: 'Fixed Chip Three', removable: false },
    ],
    selectable: true,
    removable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chipset where chips can be selected but not removed.',
      },
    },
  },
};

export const Static: Story = {
  args: {
    chips: [
      { id: 1, label: 'Static Chip One', removable: false },
      { id: 2, label: 'Static Chip Two', removable: false },
      { id: 3, label: 'Static Chip Three', removable: false },
    ],
    selectable: false,
    removable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Static chipset where chips cannot be selected or removed.',
      },
    },
  },
};