import { AppProps } from "next/app";

import "@/style/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
