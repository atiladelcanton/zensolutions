import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import ContainerFluid from "../components/ContainerFluid/ContainerFluid";
import Header from "../components/Header/Header";
import "../styles/Home.module.scss";
const Home: NextPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>Zensolutions | Mudando o mundo um código por vez</title>
        <meta
          name="description"
          content="Zensolutions, mudando o mundo um código por vez, desenvolvimento de aplicativos, sites e sistemas"
        />
        <meta property="og:title" content="Zensolutions" />

        <meta property="og:image" content="/img/logo.webp" />
        <meta name="author" content="ZenSolutions <oi@zensolutions.com.br>" />
      </Head>
      <ContainerFluid>
        <>
          <Header />
          <Banner />
        </>
      </ContainerFluid>
    </div>
  );
};

export default Home;
