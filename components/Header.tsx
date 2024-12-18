// "use client";
// import { useState } from "react";
import Logo from "./Logo";
// import Hamburger from "./Hamburger";
// import Menu from "./Menu";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="w-full bg-black text-white dark:bg-transparent">
      <nav className="flex justify-between p-3">
        <div>
          <Logo />
        </div>
        <div>
          <DarkModeToggle />
        </div>
        {/* <div>
          <Hamburger setOpen={setOpen} open={open} />
        </div> */}
      </nav>
      {/* {open && (
        <div>
          <Menu />
        </div>
      )} */}
    </header>
  );
};

export default Header;
