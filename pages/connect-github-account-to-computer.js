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
        <meta
          name="description"
          content="How to connect your github account to your computer"
        />
      </Head>
      <BlogBody>
        <PostTitle>Notes on git and github</PostTitle>
        <SubHeading>
          How to connect your github account to your computer
        </SubHeading>
        <Sentence>1. Identify your github username and user email:</Sentence>
        <Litem> Your user name is in your github profile.</Litem>
        <PicWrapper>
          <Image
            //
            src={githubusername}
            alt="Github profile user name"
          />
        </PicWrapper>
        <Litem>Your email is in your github settings.</Litem>
        <LitemTwo>Go to the github settings.</LitemTwo>
        <LitemTwo>On the left panel, click on the Emails tab.</LitemTwo>
        <PicWrapper>
          <Image
            //
            src={githubuseremail}
            alt="Github settings username"
          />
        </PicWrapper>
        <Sentence>2. Declare globally your github username and email:</Sentence>
        <Sentence>
          Make sure you have github in your computer by checking your github
          version.
        </Sentence>
        <Code>git --version</Code>
        <Sentence>Response in terminal should be:</Sentence>
        <Code>git version 2.27.0</Code>
        <Sentence>Declare your user name and email:</Sentence>
        <Code>
          git config --global user.name 'mona-lisa' <br />
          git config --global user.email 'mona-lisa@gmail.com'
        </Code>
        <Sentence>3. Check that correct user information is in vsc:</Sentence>
        <Code>git config --list</Code>
        <Litem>Response in the terminal should be:</Litem>
        <Code>
          user.name=mona-lisa <br />
          user.email=mona-lisa@gmail.com
        </Code>
      </BlogBody>
    </div>
  );
}

export default GitNotes;
