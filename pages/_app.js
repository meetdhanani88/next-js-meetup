import '../styles/globals.css';
import Layout from "../components/layout/Layout"
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {


  return (
    <>

      <Layout>
        <NextNProgress color="#29D " options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
