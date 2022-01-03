import Link from "next/link";
// import styles from "../styles/Menu.module.css";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">All posts</Link>
        </li>
        <li>
          <Link href="/deploy-netlify">Deploy site on netlify </Link>
        </li>
        <li>
          <Link href="/deploy-react-github-pages">
            Deploy react app on githubpages
          </Link>
        </li>
        <li>
          <Link href="/git-notes">Git notes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
