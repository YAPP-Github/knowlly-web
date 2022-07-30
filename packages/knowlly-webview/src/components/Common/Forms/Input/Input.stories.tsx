import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  component: Input,
  title: 'Common/Forms',
} as ComponentMeta<typeof Input>;

const InputStory: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDefault = InputStory.bind({});
InputDefault.args = {
  placeholder: '텍스트를 입력하세요',
  maxLength: 10,
};
InputDefault.storyName = 'Input';
