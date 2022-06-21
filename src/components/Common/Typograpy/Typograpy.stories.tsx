import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typograpy from './Typograpy';
import * as Styled from '../../Profile/Introduction/IntroductionStyle';

export default {
  component: Typograpy,
  title: 'Common/Typograpy',
} as ComponentMeta<typeof Typograpy>;

const Template: ComponentStory<typeof Typograpy> = (args) => (
  <Typograpy {...args}>{args.children}</Typograpy>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'headline-1',
  textColor: 'gray6B',
  children: '타이포그래피',
};

export const headline1: ComponentStory<typeof Typograpy> = () => (
  <Typograpy variant="overline">헤더-1</Typograpy>
);

export const subtitle3: ComponentStory<typeof Typograpy> = () => (
  <Typograpy variant="subtitle-3">서브 헤더-3</Typograpy>
);

export const body = Template.bind({});
body.args = {
  variant: 'body-1',
  children: '바디 텍스트',
};
body.decorators = [(story) => <Styled.IntroWrapper>{story()}</Styled.IntroWrapper>];

export const warning = Template.bind({});
warning.args = {
  variant: 'body-2',
  textColor: 'warning',
  children: '경고',
};
