import { AppProps } from "next/app";
import Image from "next/future/image";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image {...logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
