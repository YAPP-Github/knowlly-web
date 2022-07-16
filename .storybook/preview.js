import { ThemeProvider } from 'styled-components';
import Theme from '@styles/theme';
import GlobalStyle from '@styles/global-style';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
