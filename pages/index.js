import Head from "next/head";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahad's Notes</title>
        <meta name="keywords" content=" Frontend development, JavaScript" />
        <meta
          name="description"
          content="Notes on various topics regarding coding"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Featured />
    </div>
  );
}
