import Logo from "./Logo";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between m-2">
        <div>
          <Logo />
        </div>
        <div>
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Header;
