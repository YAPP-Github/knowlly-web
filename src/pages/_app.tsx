import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Theme from '@styles/theme';
import GlobalStyle from '@styles/global-style';
import { ThemeProvider } from 'styled-components';
import Font from '@styles/font';
import SvgSprite from '@components/Common/Svg/SvgSprite';

const queryClient = new QueryClient();

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
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
