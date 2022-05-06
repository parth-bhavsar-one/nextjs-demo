import "../styles/index.css";
import type { AppProps } from "next/app";
import NavBar from "../component/landingPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
