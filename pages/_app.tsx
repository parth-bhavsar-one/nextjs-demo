import "../styles/index.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "../component/landingPage";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
