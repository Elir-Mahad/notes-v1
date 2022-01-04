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
import style from "../styles/Home.module.css";
import Image from "next/image";

function GitNotes() {
  return (
    <div className={style.container}>
      <BlogBody>
        <PostTitle>Git notes</PostTitle>
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
          git config --global user.name "mona-lisa" <br />
          git config --global user.email "mona-lisa@gmail.com"
        </Code>
        <Sentence>3. Check that correct user information is in vsc:</Sentence>
        <Code>git config --list</Code>
        <Litem>Response in the terminal should be:</Litem>
        <Code>
          user.name=mona-lisa <br />
          user.email=mona-lisa@gmail.com
        </Code>
        <SubHeading>
          How to add a remote url to your local repository
        </SubHeading>
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
        <SubHeading>How to code with other people</SubHeading>
        <Sentence>1. Pull the repo</Sentence>
        <Litem>If the main code is in the branch ‘master’ then </Litem>
        <Code>git pull master</Code>
        <Sentence>2. Work on a issues</Sentence>
        <Litem>
          Before you create a branch, write an issue ticket outlining al the new
          tasks/ features that you will be coding out.
        </Litem>
        <Sentence>3. Create a branch of the master branch</Sentence>
        <Litem>
          If you want to create a branch called header of the master branch,
          first make sure that you are on the master branch:
        </Litem>
        <Code>git branch</Code>
        <Litem>terminal response: </Litem>
        <Code>master</Code>

        <Litem>Then create the header branch:</Litem>
        <Code>git branch header</Code>
        <Litem>Enter the header branch:</Litem>
        <Code>git checkout header</Code>
        <Litem>Check which branch you are currenlty in:</Litem>
        <Code>git branch</Code>
        <Litem>Terminal response:</Litem>
        <Code>Switched to branch 'header'</Code>
        <litem>Write the code for the header feature in this branch.</litem>

        <Sentence>4. Push the header new branch:</Sentence>

        <Code>
          git add . <br />
          git commit -m “Add header code” <br />
          git push <br />
        </Code>

        <Litem>
          If this is your first push, then you will get this response:
        </Litem>

        <Code>git push --set-upstream origin master</Code>

        <Litem>
          Copy and paste this into the terminal so that from now onwards
          whenever you want to push to your branch you will only type ‘git push’
        </Litem>

        <Sentence>5. Create a pull request:</Sentence>

        <Litem>
          Make sure that the branch you are requesting to merge your branch into
          is the correct branch.
        </Litem>

        <LitemTwo>
          For example: If you are working on a branch called ‘header’ and you
          want to merge this header branch into the ‘master’, then on the top of
          the pull request it should say that you want to merge header into
          master.
        </LitemTwo>

        <Litem>
          In the pull request message, explain all the things that happened in
          this branch. Specify next steps.
        </Litem>

        <Litem>
          Assign a reviewer. If your’e working by yourself then you can leave
          this as blank.
        </Litem>

        <Litem>
          Assign an assignee. If your’e working by yourself assign this to
          yourself.
        </Litem>

        <Litem>Fill out the other specifications.</Litem>

        <Litem>Submit the pull request.</Litem>

        <Litem>
          After its submitted, attach the issue name that was associated with
          this pull request in the add issue block on the bottom right.
        </Litem>

        <Litem>
          If your’e working with a group, wait for the reviewer to review it and
          either accept it or reject it.
        </Litem>

        <Litem>
          If your’e working by yourself, go to the bottom of the pull request
          and click on merge.
        </Litem>

        <Sentence>6. Create a new branch:</Sentence>

        <Litem>
          Change the branch back to the master or whatever the branch you are
          going to be merging into is called.
        </Litem>

        <Litem>Switch to the master branch</Litem>

        <Code>git checkout master</Code>

        <Litem>
          Update your local repo master branch with the latest changes:
        </Litem>

        <Code>git pull master</Code>
        <Litem>
          This is an important step, especially when your’e working with
          multiple people who are all working on different branches.
        </Litem>

        <LitemTwo>
          For example: Imagine that you were working on the header branch, and
          another person was working on the menu branch.
        </LitemTwo>

        <LitemTwo>
          Then you finished working on the header branch, submitted it, and it
          got merged into the master.
        </LitemTwo>

        <LitemTwo>
          Also, the other person finished working on the menu branch, they
          submitted it, and it got merged.
        </LitemTwo>

        <LitemTwo>
          Now, imagine your next issue is about creating a button.
        </LitemTwo>

        <LitemTwo>
          Before you create the button branch, you must first update your local
          repo with all the -code that has been merged into it so far (ie,
          header + menu).
        </LitemTwo>

        <Litem>
          If your local repo is updated, then you should see ‘Already up to
          date’ in the terminal.
        </Litem>

        <Litem>
          Create a new branch called button, off the updated local repo master
          branch:
        </Litem>

        <Code>git branch ‘button’</Code>

        <Litem>Enter the new button branch:</Litem>

        <Code>git checkout button</Code>

        <SubHeading>How to write commits properly:</SubHeading>

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
