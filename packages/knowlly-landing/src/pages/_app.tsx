import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Font, GlobalStyle } from '@common/styles';
import { SvgSprite } from '@components/Common';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Knowlly</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Font />
      <SvgSprite />
    </>
  );
}

export default MyApp;
