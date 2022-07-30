import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  component: Button,
  title: 'Common/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>매칭 신청하기</Button>;

export const Default = Template.bind({});
