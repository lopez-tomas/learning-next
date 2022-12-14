import { AppProps } from 'next/app';
import Layout from '@components/Layout/Layout';
import '@styles/main.sass';

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // Adittional props
  return (
    <Layout>
      <Component {...pageProps} title={''} />
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
