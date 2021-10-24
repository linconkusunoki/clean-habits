import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import '../i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
