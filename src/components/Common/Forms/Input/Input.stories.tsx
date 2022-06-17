import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  component: Input,
  title: 'Common/Forms',
} as ComponentMeta<typeof Input>;

const InputStory: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = InputStory.bind({});
Default.args = {
  placeholder: '텍스트를 입력하세요',
};
Default.storyName = 'Input';
