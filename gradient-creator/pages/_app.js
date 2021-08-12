import '../styles/globals.css'
import Head from '../components/Head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp