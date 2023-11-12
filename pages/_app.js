import '@/styles/globals.css'
import { Poppins } from "next/font/google"
import styles from '@/styles/Home.module.css'

// Components
import Layout from './components/layout-main/Layout'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${styles.main} ${poppins.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
