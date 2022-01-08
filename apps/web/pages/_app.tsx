import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </StylesProvider>
  );
}

export default CustomApp;
