import '/styles/globals.scss';
import Navbar from '/components/Navbar';
import Context from '/components/context';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <Context>
    <Head>
      {eruda()}
      <meta name="theme-color" content="rgb(7,94,84)" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Saurabh Khade" />
      <meta name="robots" content="index, follow" />
      <title>WhatsApp</title>
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </Context>
  );
}

export default MyApp

function eruda() {
  if (process.env.NODE_ENV == 'development') {
    return (
      <>
      <script src="//cdn.jsdelivr.net/npm/eruda"></script>
      <script>eruda.init();</script>
      </>
    );
  } else {
    return ("");
  }
}