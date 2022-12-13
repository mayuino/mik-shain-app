import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Noto_Sans_JP} from '@next/font/google'

const noto_sans_jp = Noto_Sans_JP({
  subsets:['japanese'],
  weight:['500'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={noto_sans_jp.className}>
    <Component {...pageProps} />
   </main>
   );
}
