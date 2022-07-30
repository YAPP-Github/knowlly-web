import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from './TextArea';

export default {
  component: TextArea,
  title: 'Common/Forms',
} as ComponentMeta<typeof TextArea>;

const TextAreaStory: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextAreaDefault = TextAreaStory.bind({});
TextAreaDefault.args = {
  placeholder: '생생한 후기를 남겨주세요.',
  maxLength: 50,
};
TextAreaDefault.storyName = 'TextArea';
