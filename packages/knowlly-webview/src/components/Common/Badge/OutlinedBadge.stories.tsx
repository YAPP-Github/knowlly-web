import { ComponentStory, ComponentMeta } from '@storybook/react';

import OutlinedBadge from './OutlinedBadge';

export default {
  component: OutlinedBadge,
  title: 'Common/Badge',
} as ComponentMeta<typeof OutlinedBadge>;

const OutlinedBadgeStory: ComponentStory<typeof OutlinedBadge> = (args) => (
  <OutlinedBadge {...args}>{args.children}</OutlinedBadge>
);

export const Outlined = OutlinedBadgeStory.bind({});
Outlined.args = {
  children: '뱃지',
  type: 'time',
};
