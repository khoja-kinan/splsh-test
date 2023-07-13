import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PlayerContextProvider } from "../../context/playerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <Component {...pageProps} />
    </PlayerContextProvider>
  );
}
