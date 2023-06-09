import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";


export async function getStaticProps(context) {
    return {
      props: { 
        number: context.params.number,
        date: new Date().toISOString(),
       }, // will be passed to the page component as props
       revalidate: 60,//1 minute
    }
  }

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          number: "one",
        },
      }, // See the "paths" section below
    ],
    fallback: "blocking", // See the "fallback" section below
  };
}

export default function Home({ number, date }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The number is {number}</h1>
        <div>
          {date} (shouldn't change if cached, should if revalidate works)
        </div>
      </main>
    </div>
  );
}
