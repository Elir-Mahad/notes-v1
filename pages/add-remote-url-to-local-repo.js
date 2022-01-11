import Head from "next/head";
import {
  //
  BlogBody,
  Sentence,
  PostTitle,
  Code,
  PicWrapper,
} from "../styles/Styles.js";
import style from "../styles/Home.module.css";
import createrepo from "../assets/createrepo.png";
import remoteurl from "../assets/remoteurl.png";
import Image from "next/image";

function RemoteOriginUrl() {
  return (
    <div>
      <Head>
        <title>How to add a remote url to your local repository</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial, remote origin url"
        />
        <meta
          name="description"
          content="How to add a remote url to your local repository"
        />
      </Head>
      <PostTitle className={style.weight100}>
        How to add a remote url to your local repository
      </PostTitle>
      <BlogBody className={style.weight100}>
        <Sentence>1. Create a repo:</Sentence>
        <PicWrapper>
          <Image
            //
            src={createrepo}
            alt="Github page for creating a new repository"
          />
        </PicWrapper>
        <Sentence>
          2. Copy and paste the remote origin url into the terminal or vsc
          terminal:
        </Sentence>
        <PicWrapper>
          <Image
            //
            src={remoteurl}
            alt="Github repository quick set up page"
          />
        </PicWrapper>
        <Sentence>
          3. Check that remote url is connected to local repo:
        </Sentence>
        <Code>git remote -v</Code>
        <Sentence>
          4. If a remote url is already connected to your local repo then remove
          it with:
        </Sentence>
        <Code>git remote remove origin</Code>
      </BlogBody>
    </div>
  );
}

export default RemoteOriginUrl;
