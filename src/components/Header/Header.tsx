import NavBar from "./navbar";
import BackDrop from "./BackDrop";
import type { JSX } from "react";

const Header = (): JSX.Element => {
  return (
    <div className="all">
      <div className="container">
        <NavBar />
      </div>
      <BackDrop />
    </div>
  );
};

export default Header;
