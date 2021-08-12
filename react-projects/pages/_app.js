import '../styles/globals.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
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
  
  return (
    <>
    <Head>
      {eruda()}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Saurabh Khade" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="ReactJS Components" />
      <meta property="og:site_name" content="reactjs-components" />
      <meta property="og:image" content="/favicon.jpeg" />
      <meta property="og:image:alt" content="Saurabh Khade" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://reactjs-components.vercel.app" />
      <link rel="shortcut icon" href="/favicon.jpeg" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon.jpeg" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
