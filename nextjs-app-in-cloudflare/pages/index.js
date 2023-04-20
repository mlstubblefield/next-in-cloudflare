import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to <a href="/">The thing!</a>
        </h1>
        <div className={styles.card}>
          <ul>
            <li>
              <a href="/isr/one">One (build time static)</a>
            </li>
            <li>
              <a href="/isr/1">1 (ISR)</a>
            </li>
            <li>
              <a href="/api/revalidate?number=1">revalidate 1</a>
            </li>
          </ul>
        </div>
        <Image src="https://content.speedwaymotors.com/ProductImages/917347_L1600_6e2641a1-e4dc-4d8c-a7a6-a01c539d0485.jpg" width={550} height={550} />
      </main>
    </div>
  );
}
