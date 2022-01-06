import Head from "next/head";
import {
  //
  BlogBody,
  Litem,
  Sentence,
  PostTitle,
  SubHeading,
  Code,
  LitemTwo,
  PicWrapper,
} from "../styles/Styles.js";
import githubusername from "../assets/githubusername.png";
import githubuseremail from "../assets/githubuseremail.png";
import createrepo from "../assets/createrepo.png";
import remoteurl from "../assets/remoteurl.png";
import Image from "next/image";

function GitNotes() {
  return (
    <div>
      <Head>
        <title>Notes on git and github</title>
        <meta
          name="keywords"
          content="Github, Git, frontend development, JavaScript, Tutorial"
        />
        <meta name="description" content="How to write commits properly" />
      </Head>
      <BlogBody>
        <PostTitle>Notes on git and github</PostTitle>
        <SubHeading>How to write commits properly</SubHeading>

        <Litem>
          A commit is a set of instructions for how to go from a previous state
          to a new state.
        </Litem>

        <Litem>Write a commit as if you are giving orders to:</Litem>

        <LitemTwo>a person on how to change the code.</LitemTwo>

        <LitemTwo>the codebase to change its behaviour.</LitemTwo>

        <Litem>
          The preference for present-tense, imperative-style commit messages
          comes from Git itself.
        </Litem>

        <Litem>
          {" "}
          Example: commit -m “Add all images to the assets folder.”
        </Litem>
      </BlogBody>
    </div>
  );
}

export default GitNotes;
