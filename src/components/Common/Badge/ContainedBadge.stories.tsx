import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContainedBadge from './ContainedBadge';

export default {
  component: ContainedBadge,
  title: 'Common/Badge',
} as ComponentMeta<typeof ContainedBadge>;

const ContainedBadgeStory: ComponentStory<typeof ContainedBadge> = (args) => (
  <ContainedBadge {...args}>{args.children}</ContainedBadge>
);

export const Contained = ContainedBadgeStory.bind({});
Contained.args = {
  children: '뱃지',
  type: 'category',
};
