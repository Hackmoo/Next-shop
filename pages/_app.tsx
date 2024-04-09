import Layout from '@/components/Layout'
import '@/app/globals.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout >
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}