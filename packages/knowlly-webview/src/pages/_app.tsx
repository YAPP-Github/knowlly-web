import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '@react-query/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import SvgSprite from '@components/Common/Svg/SvgSprite';
import { ThemeProvider } from 'styled-components';
import { Font, GlobalStyle, theme } from '@common/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <Font />
          <SvgSprite />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
