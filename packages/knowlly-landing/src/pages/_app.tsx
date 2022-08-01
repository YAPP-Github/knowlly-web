import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Font, GlobalStyle } from '@common/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Font />
    </>
  );
}

export default MyApp;
