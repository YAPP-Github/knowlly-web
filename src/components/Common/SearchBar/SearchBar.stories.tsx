import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Common/SearchBar',
} as ComponentMeta<typeof SearchBar>;

const SearchBarStory: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const SearchBarDefault = SearchBarStory.bind({});
SearchBarDefault.args = {
  placeholder: '어떤 클래스를 찾고 싶으신가요?',
};
