// pages/index.js

import Head from "next/head";
import products from "./data/products";
import Header from "./components/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Listing</title>
        <meta
          name="description"
          content="A listing of Callaway golf products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}></main>
    </div>
  );
}
