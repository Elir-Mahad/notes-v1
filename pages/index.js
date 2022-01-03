import Head from "next/head";
import Allposts from "../components/Allposts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="keywords" content="Homepage, HTML, CSS, JavaScript" />
        <meta name="description" content="Homepage, Free Web tutorials" />
        <link
          href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p>test</p>
      {/* <Allposts /> */}
    </div>
  );
}
