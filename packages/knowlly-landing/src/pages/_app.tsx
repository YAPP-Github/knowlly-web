import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Font, GlobalStyle } from '@common/styles';
import { SvgSprite } from '@components/Common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Font />
      <SvgSprite />
    </>
  );
}

export default MyApp;
