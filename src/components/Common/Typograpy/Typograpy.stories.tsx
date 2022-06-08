import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button/Button';

import Typograpy from './Typograpy';

export default {
  component: Typograpy,
  title: 'Common/Typograpy',
} as ComponentMeta<typeof Typograpy>;

const Template: ComponentStory<typeof Typograpy> = (args) => (
  <Typograpy {...args}>타이포그래피</Typograpy>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'headline-1',
};

export const headline1: ComponentStory<typeof Typograpy> = () => (
  <Typograpy variant="headline-1">헤더-1</Typograpy>
);

export const subtitle3: ComponentStory<typeof Typograpy> = () => (
  <Typograpy variant="subtitle-3">서브 헤더-3</Typograpy>
);

export const button1 = Template.bind({});
button1.args = {
  variant: 'button-1',
};
button1.decorators = [
  (story) => (
    <Button size="x-small" type="button">
      {story()}
    </Button>
  ),
];
