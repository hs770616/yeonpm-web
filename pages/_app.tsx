import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_BASE_PATH?.startsWith('local') ? `(l) ` : ''}yeonpm</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
