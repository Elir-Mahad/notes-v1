import Head from "next/head";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="keywords" content="Homepage, HTML, CSS, JavaScript" />
        <meta name="description" content="Homepage, Free Web tutorials" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Featured />
    </div>
  );
}
