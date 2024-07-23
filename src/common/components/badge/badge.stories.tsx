import { Meta, StoryObj } from '@storybook/react';

import { Badge as BadgeComponent } from './badge';

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  title: 'ui-kit/badge',
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f0e1' },
        { name: 'dark', value: '#34306e' },
      ],
    },
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BadgeComponent>;

export const Black: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'black',
  },
};

export const White: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'white',
  },
};

export const Blue: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'blue',
  },
};

export const Red: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'yellow',
  },
};

export const Green: Story = {
  args: {
    title: 'Total volume',
    value: '1000',
    color: 'green',
  },
};
