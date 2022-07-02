import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@react-query/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import SvgSprite from '@components/Common/Svg/SvgSprite';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global-style';
import Theme from '@styles/theme';
import Font from '@styles/font';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <Font />
          <SvgSprite />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
