"use client";
import { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header className="static">
      <nav className="flex justify-between m-2">
        <div>
          <Logo />
        </div>
        <div>
          <DarkModeToggle />
        </div>
        <div>
          <Hamburger setOpen={setOpen} open={open} />
        </div>
      </nav>
      {open && (
        <div>
          <Menu />
        </div>
      )}
    </header>
  );
};

export default Header;
