import { WholeApp } from "../styles/Styles";
import Header from "./Header";
import Menu from "./Menu";

function Layout({ children }) {
  return (
    <WholeApp>
      <Menu />
      <div>
        <Header />
        {children}
      </div>
    </WholeApp>
  );
}

export default Layout;
