import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <NextNProgress />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp