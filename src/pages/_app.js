import "@/styles/Home.module.css";
import './../components/Nav/Page.css'
import './../components/Sidenav/Page.css'
import './another/index.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
