import "../styles/globals.css"; //Global css
import type { AppProps } from "next/app";
import {NavBar,Footer} from "../Components";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
